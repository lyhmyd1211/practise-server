import { Controller } from "egg";
var moment = require("moment");
export default class qxController extends Controller {
  public async getDate() {
    const { ctx } = this;
    const { count } = ctx.query;
    let data = await ctx.service.qx.getDate(parseInt(count));
    let tmp: [{ dtime_ec: number }] = [{ dtime_ec: 0 }];
    tmp.pop();
    data.map((item) => {
      tmp.push({ dtime_ec: new Date(item.dtime_ec).getTime() });
      return item;
    });
    ctx.body = tmp;
  }

  public async getMapByDate() {
    const { ctx } = this;
    const { date1, date2, way } = ctx.query;
    if (!date1 && !date2) {
      ctx.body = {
        code: 10001,
        data: {
          exception: "参数错误",
          description: "date1 is empty",
          suggestion: "",
        },
      };
      return;
    } else {
      let id =
        moment(parseInt(date1)).format("YYYYMMDDHH") +
        (date2 % 2 === 1 ? "06" : "15");
      console.log("id", id);
      let data = await ctx.service.qx.getMapByDate(id, date2, way);
      ctx.body = {
        code: 0,
        data: {
          msg: "查询成功",
          data,
        },
      };
    }
  }

  public async getTableData() {
    const { ctx } = this;
    const { area, date, way } = ctx.query;
    // let time = moment(parseInt(date)).format("YYYY-MM-DD HH:mm:ss");
    let data = await ctx.service.qx.getTableData(area, date, way);
    let station = data.slice(0, 12).map((item) => item.stationid);
    // let areaFormat = JSON.parse(area).map((item) =>
    //   moment(item).format("DD-HH")
    // );
    let result: {}[] = [""];
    let formatDate = moment(parseInt(date)).format("HH");
    result.pop();
    data.map((item) => {
      if (
        (formatDate == "08" && item.id_ec.slice(10, 12) == "06") ||
        (formatDate == "20" && item.id_ec.slice(10, 12) == "15")
      ) {
        result[station.indexOf(item.stationid)] = {
          ...result[station.indexOf(item.stationid)],
          time: item.stationid,
          [item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10)]: item[
            item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10)
          ],
          [item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10) + "a"]: item[
            item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10) + "a"
          ],
        };
      } else if (
        !result[station.indexOf(item.stationid)][
          item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10)
        ]
      ) {
        result[station.indexOf(item.stationid)] = {
          ...result[station.indexOf(item.stationid)],
          time: item.stationid,
          [item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10)]: "-",
          [item.id_ec.slice(6, 8) + "-" + item.id_ec.slice(8, 10) + "a"]: "-",
        };
      }
    });
    ctx.body = result;
  }

  // public async getDate2() {
  //   const { ctx } = this;
  // }
}

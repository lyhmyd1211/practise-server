import { Controller } from "egg";
var moment = require("moment");
export default class qxController extends Controller {
  public async getDate() {
    const { ctx } = this;
    const { count } = ctx.query;
    let data = await ctx.service.qx.getDate(parseInt(count));
    data = data.map((item) => {
      item.dtime_ec = new Date(item.dtime_ec).getTime();
      return item;
    });
    ctx.body = data;
  }

  public async getMapByDate() {
    const { ctx } = this;
    const { date1, date2 } = ctx.query;
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

      let data = await ctx.service.qx.getMapByDate(id, date2);
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
    const { date } = ctx.query;
    let time = moment(parseInt(date)).format("YYYY-MM-DD HH:mm:ss");
    ctx.body = await ctx.service.qx.getTableData(time);
  }

  // public async getDate2() {
  //   const { ctx } = this;
  // }
}

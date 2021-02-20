import { Service } from "egg";
var moment = require("moment");
/**
 * Test Service
 */
export default class Qx extends Service {
  modelName = [
    "Ave",
    "BestCoefficient",
    "DoubleWeightedAverage",
    "Ec_2t",
    "PolynomialFitting",
  ];
  public async getDate(count = 10) {
    return await this.ctx.model.Ave.findAll({
      limit: count,
      attributes: [
        [
          this.app.Sequelize.fn("DISTINCT", this.app.Sequelize.col("dtime_ec")),
          "dtime_ec",
        ],
      ],
      order: [["dtime_ec", "DESC"]],
    });
    // return await this.app.mysql.query(
    //   "SELECT DISTINCT dtime_ec  FROM ave ORDER BY dtime_ec DESC LIMIT ?",
    //   count
    // );
  }

  public async getMapByDate(id: String, date2: number, way: number = 0) {
    let col: number = 24;
    if (date2 % 2 === 0) {
      col = 24 * (date2 / 2);
    } else {
      col = 24 * Math.ceil(date2 / 2);
    }

    return await this.ctx.model[this.modelName[way]].findAll({
      where: {
        id_ec: { [this.app.Sequelize.Op.like]: id + "%" },
      },
      attributes: ["stationid", ["Tmax" + col, "hT"], ["Tmin" + col, "dT"]],
    });

    // return await this.app.mysql.query(
    //   "select stationid,Tmax? as hT,Tmin? as dT from ave where id_ec LIKE ?",
    //   [col, col, id + "%"]
    // );
  }

  public async getTableData(area: string, date: number, way: number) {
    let tempArea = JSON.parse(area);
    let col: [[string, string]] = [["", ""]];
    col.pop();
    for (let index = 0; index < 10; index++) {
      let hour = (date - tempArea[index]) / (60 * 60 * 1000);
      let hourFormat = moment(tempArea[index]).format("DD-HH");
      if (hour % 24 === 0) {
        col.push(["Tmax" + hour, hourFormat]);
        col.push(["Tmin" + hour, hourFormat + "a"]);
      } else {
        col.push(["Tmax" + (hour + 12), hourFormat]);
        col.push(["Tmin" + (hour + 12), hourFormat + "a"]);
      }
    }
    console.log("col", col);
    return await this.ctx.model[this.modelName[way]].findAll({
      where: {
        dtime_ec: {
          [this.app.Sequelize.Op.and]: [
            { [this.app.Sequelize.Op.gte]: tempArea[tempArea.length - 1] },
            { [this.app.Sequelize.Op.lte]: tempArea[0] },
          ],
        },
      },
      raw: true,
      attributes: ["id_ec", "stationid", ...col],
    });
    // return await this.app.mysql.query(
    //   "select * from ave where dtime_ec = ?",
    //   time
    // );
    // select * from table where
  }
  // public async getDate1() {
  //   // return await this.app.mysql.query("select ")
  // }
}

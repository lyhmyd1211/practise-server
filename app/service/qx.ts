import { Service } from "egg";
/**
 * Test Service
 */
export default class Qx extends Service {
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

  public async getMapByDate(id: String, date2: number) {
    let col: number = 24;
    if (date2 % 2 === 0) {
      col = 24 * (date2 / 2);
    } else {
      col = 24 * Math.ceil(date2 / 2);
    }

    return await this.ctx.model.Ave.findAll({
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

  public async getTableData(time: String) {
    return await this.app.mysql.query(
      "select * from ave where dtime_ec = ?",
      time
    );
  }
  // public async getDate1() {
  //   // return await this.app.mysql.query("select ")
  // }
}

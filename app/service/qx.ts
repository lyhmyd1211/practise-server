import { Service } from "egg";

/**
 * Test Service
 */
export default class Qx extends Service {
  public async getDate(count = 10) {
    return await this.app.mysql.query(
      "SELECT DISTINCT dtime_ec  FROM ave ORDER BY dtime_ec DESC LIMIT ?",
      count
    );
  }

  public async getMapByDate(id: String, date2: number) {
    let col: number = 0;
    if (date2 % 2 === 0) {
      col = 24 * (date2 / 2);
    } else {
      col = 24 * Math.ceil(date2 / 2);
    }

    console.log("aaaa", col, id);
    return await this.app.mysql.query(
      "select stationid,Tmax? as hT,Tmin? as dT from ave where id_ec LIKE ?",
      [col,col, id + "%"]
    );
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

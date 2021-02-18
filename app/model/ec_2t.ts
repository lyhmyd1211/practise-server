/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "ec_2t",
    {
      id_ec: {
        type: DataTypes.STRING(48),
        allowNull: true,
      },
      datem_ec: {
        type: DataTypes.DATE,
        allowNull: true,
        getDataValue: function (a) {
          return a;
        },
        get() {
          return moment(this.getDataValue("dtime_ec")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        },
      },
      station_id_ec: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      diqu_type_ec: {
        type: DataTypes.INTEGER(3),
        allowNull: true,
      },
      T000: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T003: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T006: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T009: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T012: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T015: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T018: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T021: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T024: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T027: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T030: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T033: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T036: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T039: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T042: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T045: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T048: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T051: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T054: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T057: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T060: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T063: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T066: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T069: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T072: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T078: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T084: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T090: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T096: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T102: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T108: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T114: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T120: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T126: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T132: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T138: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T144: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T150: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T156: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T162: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T168: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T174: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T180: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T186: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T192: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T198: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T204: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T210: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T216: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T222: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T228: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T234: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      T240: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      tableName: "ec_2t",
    }
  );

  Model.associate = function () {};

  return Model;
};

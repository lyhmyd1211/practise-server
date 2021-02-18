/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "polynomial_fitting",
    {
      id_ec: {
        type: DataTypes.STRING(96),
        allowNull: true,
      },
      dtime_ec: {
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
      stationid: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      Tmax24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax48: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax72: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax96: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax120: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax144: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmax168: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin48: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin72: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin96: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin120: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin144: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Tmin168: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      tableName: "polynomial_fitting",
    }
  );

  Model.associate = function () {};

  return Model;
};

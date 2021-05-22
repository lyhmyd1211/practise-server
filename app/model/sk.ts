/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sk', {
    id: {
      type: DataTypes.INTEGER(64),
      allowNull: false,
      primaryKey: true
    },
    sdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stations: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tmin: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tmax: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'sk'
  });

  Model.associate = function() {

  }

  return Model;
};

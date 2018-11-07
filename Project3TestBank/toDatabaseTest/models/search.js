module.exports = function(sequelize, DataTypes) {
  var search = sequelize.define("search", {
    instructorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    locCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      locState: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      img: {
        type: DataTypes.TEXT,
        validate: {
          len: [1]
        }
      }
    }
  });

  return search;
};
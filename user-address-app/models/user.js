module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' });
  };

  return User;
};

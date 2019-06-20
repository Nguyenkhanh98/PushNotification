import {Sequelize } from "sequelize";

sequelize = new Sequelize('postgres://kjmfgplr:xw7onQvLZEnFNDc6Ue43W_Ww9W-rkrhs@raja.db.elephantsql.com:5432/kjmfgplr');

class SubScription extends Sequelize.Model {}
SubScription.init({
  UserId: Sequelize.STRING,
  SubscriptionId: Sequelize.STRING,
  AccessToken: Sequelize.STRING,
  Resource: Sequelize.STRING,
  ChangeType: Sequelize.STRING,
  ClientState: Sequelize.STRING,
  NotifiCationUrl: Sequelize.STRING,
  SubScription: Sequelize.STRING,

}, { sequelize, modelName: 'SubScription' });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
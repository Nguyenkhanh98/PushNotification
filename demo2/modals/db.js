var Sequelize = require( "sequelize") ;

sequelize = new Sequelize('postgres://kjmfgplr:xw7onQvLZEnFNDc6Ue43W_Ww9W-rkrhs@raja.db.elephantsql.com:5432/kjmfgplr');

module.exports = (sequelize) =>
{
  const Subscription  =sequelize.define('Subscription',
  {
    UserId: Sequelize.STRING,
    SubscriptionId: Sequelize.STRING,
    AccessToken: Sequelize.STRING,
    Resource: Sequelize.STRING,
    ChangeType: Sequelize.STRING,
    ClientState: Sequelize.STRING,
    NotifiCationUrl: Sequelize.STRING,
    SubScription: Sequelize.STRING,
  });
  return Subscription;
}




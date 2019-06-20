exports.adalConfiguration = {
    authority: 'https://login.microsoftonline.com/common',
    clientID: '2dccb685-3064-4a79-8fd2-4233e3819496',
    clientSecret: 'FSFXZRxPW8U615LgmxahwENIUbeY_?=/',
    redirectUri: 'http://localhost:3000/callback'
  };
  
  exports.subscriptionConfiguration = {
    changeType: 'Created',
    notificationUrl: 'https://5545b761.ngrok.io/listen',
    resource: 'me/mailFolders(\'Inbox\')/messages',
    clientState: 'cLIENTsTATEfORvALIDATION'
  };
  
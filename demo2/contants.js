exports.adalConfiguration = {
    authority: 'https://login.microsoftonline.com/common',
    clientID: '9eb798c7-766b-495f-9f84-9b9e808bc1b2',
    clientSecret: 'FNyB36xwyS*4KvtZNt@9KElL.:ptkl=o',
    redirectUri: 'http://localhost:3000/authorize'
  };
  
  exports.subscriptionConfiguration = {
    changeType: 'Created',
    notificationUrl: 'https://83b200b6.ngrok.io/listen',
    "Resource": 'me/mailFolders(\'Inbox\')/messages',
    clientState:"cLIENTsTATEfORvALIDATION"
  };
  
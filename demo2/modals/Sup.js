const modals = require('./db');

let Subscription ={}

Subscription.SaveData = async(req, res, next) =>{
var {UserId,SubscriptionId,AccessToken,Resource,ChangeType,ClientState,NotificationUrl,SubscriptionExpirationDateTime } =req.body;

modals.Subscription.create({
    UserId,SubscriptionId,AccessToken,Resource,ChangeType,ClientState,NotificationUrl,SubscriptionExpirationDateTime
}).then((result) => {
    res.status(200);
})
}
module.exports = Subscription;
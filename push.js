var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/e1P4qbI-A4I:APA91bEZ6APpTfivAQin8f1btDTVL6izLVF6Z1Tr4CGEPWBKWFi6wLyhoSTWQmYyIuFXw1n_CIXGIyFaAOP2akrlENWCURSpjrXCN5aJygrjyUbmJm30E2jFNo7zLYz9YnUSpkd9Ba3Z", "expirationTime": null, "keys": { "p256dh": "BDHbn3u9LOFoqQCynMCV5UE45lLc7q_KRZZ7akUrPnfcD--59cPoAgRZIYxFRxbr4FhUbsA0ZWr8CyWeNdsGD_c", "auth": "FreA3bM8LNuWe5TF5Kz6Dg" } };
push.sendNotification(sub, 'test message')
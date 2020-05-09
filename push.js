var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cua7cTBqN_Q:APA91bGgIEoB2kpr0zCmmsn271_h8UqJOqzzmVl3faY9FkLxN24vuBzQVoULQlCHDteIxD7xD0Zy0mUld2JwL23DdiwBXrVFZtoLVqhgVdzUTJ-Nf-cC_PuwiRoVjuR3uL5beJ47gdEs","expirationTime":null,"keys":{"p256dh":"BKhgN09QK9oUU1ZbcBrj4ICC2Khpz-K9nRqv7URBkmCKZedWD79p8yepco-wq6TX4eGvLmiu4fl2ymgitLa6XFM","auth":"jlOm_h7NrV8YbsiT-7y3SA"}}
push.sendNotification(sub, 'test message')

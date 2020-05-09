var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/dz_H07azIoE:APA91bFt4Fg3kE1UbnaGYooCHGGpQHMMXfe_9rT1NfJ202IYhd2EBy_lf-pSaZsW9tZ41UHDpHzQpca_A1AUlRssGxjiCxegEUgQHKyksVVZL5PeXwhKsFdo_6JBoN4k1RwEAr5H6HJZ", "expirationTime": null, "keys": { "p256dh": "BLbJxwWYUXN8PWZnf5ih2UB5MI20qvt1l4eLc6jNzW_hvuy-2BAeWKlXhT-dQGKdGDCrjRez_eNNKh7DI4JKRRs", "auth": "98pIyH92MBLXI1U6qaDYWw" } }
push.sendNotification(sub, 'test message')

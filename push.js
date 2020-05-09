var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c0vbFSk2iCM:APA91bEcrwe5b-wxPqBwgX-PCaYod2Hlh9HHoNQO67EKrmXK6xmceMSwp2VgQqgAFB7U3MVNlhun3l4jNLvzlGDqEHgVZK8GIzzn8TLwuIlTVQv7h6xl682js5637PD9zBI_xp1jyts1","expirationTime":null,"keys":{"p256dh":"BGUIBVCXItTFYsUfXfnaTe77kXqNU7cSHqrFxJBCkHDXdEzX58AR03y1prgTycx7YHVu2ZKMlE62eU5q85gU0ew","auth":"jnvAEVLcHoKcR1rX71Hcbg"}}
push.sendNotification(sub, 'test message')

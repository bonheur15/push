var push = require('web-push');
let vapidKeys = {
    publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
    privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
  }
  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey, vapidKeys.privateKey)

  let sub={};
  push.sendNotification(sub, 'test message')
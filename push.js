var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c05894XAxXU:APA91bHq2g4UMuDW_O4Sr4yRvS9dP-89m1a2o5FpsVrfrx24N_8OrREyIQJ8Oz1G3hRwB5tfLMxBynZKLPW4s6BcR_kXKGrU3ghO_508r3CuDV_9b9IjcM6w-FS4cd-r45KL4jGtb9SX","expirationTime":null,"keys":{"p256dh":"BPhOYcvAPRErnmxFbtbkOj06Y0GRd7Us7lc50cbOFG_PLk6uGXRs4-t48iE5-RnylYL-ezx0FK1zAnj2Wo1CkPM","auth":"7efpsdyO1F-Be14zd2uiRw"}}
push.sendNotification(sub, 'test message')

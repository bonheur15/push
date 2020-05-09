var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/exNKosa8w3s:APA91bFt5N_EfagIVMTRG3h1OmVffbs5w5sUW6Xs-5eyhMdfCP84AgMhk-ePwGMUkLRkKKSrd4HDOXVgjSzdDHK4ObdIVFrGoi6DF6kwIXe7vA-GcULAjpnw3SoZwd-jm5KEFLBEFEup","expirationTime":null,"keys":{"p256dh":"BIsK1JHJ3PlCwvtb2goSdQw92OBZ1g_NggiUptOViQ8S5XZvQX0_halxJ8HTvm-znSt65n9Ai-WrcbaYNFQOSpY","auth":"J032Hqw66qLtH2SFXMjUQw"}}
push.sendNotification(sub, 'test message')

var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fXU9wCSdwTg:APA91bEodW2Kr1TrRvtN6Y1sVRVyzpSo8CLkAGMKjPWdB4EsmW4TAuTrdKwK6SXYLacIqDmAcopAkVcXQ1Jv31Ge-fQS-uHweoVQR_Vo5ZVIfMWFexk_zzSoL-oP33AcLWa3QiQau2TH","expirationTime":null,"keys":{"p256dh":"BF4nsaIua6XPeFZKkSz96kSkdIz9YAPRqQT11_zJZGHZf7rgjZPYIThSOwjURjvuSVm-8jPVMNVcXRy38G5zAOs","auth":"vt2QuEMEjBSqiy0rZILkZw"}}
push.sendNotification(sub, 'test message')

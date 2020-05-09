var push = require('web-push');
let vapidKeys = {
  publicKey: 'BI2ess2eBzVCebnRTqQVZ-D8qqmb-VGDoCeppAzcFyZz2qX9RCoe61XZamsVpAJUGPAypeQZVHI2-UZ9DnQ7Hbk',
  privateKey: 'ahWd7rS9udVuZmUZ6ntmdgsCGZ0ePI_4dsNfrtqgJYw'
}
push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d6kCC1DrbQs:APA91bHLlWC40RX6KvLY6UxWt8jBN-2ab0GHepnihZ5rXSiY7v_uQbIDxTgO3gGXEnrTKLlFNcVWPXhwZiapO-kGRM_6ydTudl9dai1bB77yFLKjB7VeDH-UpOLFr6OvieO203_oPNjC","expirationTime":null,"keys":{"p256dh":"BB3IDaz6FayJ0D5EWDk0o6ZGtALYmTPUfiG4LSdxJcxvtSD126bPLCLHQ-yu01NKB6GPLLjdPwH-gQtpolBSoXo","auth":"Vx00WlCdfOzKECBDdJOseg"}}
push.sendNotification(sub, 'test message')
self.addEventListener('push', function(test,test1) {
    
    e.waitUntil(
      self.registration.showNotification(test1)
    )
  });

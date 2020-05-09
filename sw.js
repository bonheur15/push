self.addEventListener('push', function(test,test1) {
    
    test1.waitUntil(
      self.registration.showNotification(test1)
    )
  });

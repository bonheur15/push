self.addEventListener('push', function(test,test1) {
    console.log(test);
    console.log(test1);
    console.log("ghhgfhgfhfhgf");
    test1.waitUntil(
      self.registration.showNotification(test1)
      console.log("ghhgfhghhhhhhhhhhhhhhhhhhhhhhhff");
    )
  });

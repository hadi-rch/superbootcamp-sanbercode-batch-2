function authentication(req, res, next) {
    var authheader = req.headers.authorization;
  
    if (!authheader) {
      var err = "You are not authenticated!"
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err)
    }
  
    var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
  
  //   if (user == 'admin' && pass == 'password') {
  //     next();
  //   } else {
  //     var err = "username & password salah "
  //     res.setHeader('WWW-Authenticate', 'Basic');
  //     err.status = 401;
  //     return next(err);
  // }
    if (user == 'admin' && pass == 'password') {
      next();
    }else if (user == 'editor' && pass == 'secret') {
      next();
    }else if (user == 'trainer' && pass == 'rahasia') {
      next();
    } else {
      var err = "username & password salah "
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
  }

  
  
  // switch (user && pass) {
  //   case (user == 'admin' && pass == 'password'):
  //     next();
  //   case (user == 'ujang' && pass == 'ujang'):
  //     next();
  //   case (user == 'cecep' && pass == 'cecep'):
  //     next();
  //   break;     
  //   default:
  //     var err = "username & password salah "
  //     res.setHeader('WWW-Authenticate', 'Basic');
  //     err.status = 401;
  //     return next(err);
  //   }
          
}




export default authentication
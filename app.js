var express = require('express');
var services = require('./routes/services');
var bodyParser=require('body-parser');
var jwt    = require('jsonwebtoken');
var app = express();
var apiRoutes = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.set('superSecret', "pradeep");
var token=jwt.sign("myuser",app.get("superSecret"));

apiRoutes.use(function(req, res, next) {
  // check header or url parameters or post parameters for token

  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {     
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});




  app.use('/api', apiRoutes);

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
  app.set('jsonp callback', true);

app.get('/',function(req,res){
res.redirect("login.html");
});
app.post('/signup', services.signup);
app.post('/signin', services.signin);
app.post('/forgotpassword', services.forgotpassword);
app.post('/changepassword', services.changepassword);
app.get('/api/getallRecords', services.getallRecords);
app.use(express.static(__dirname+"/public"));
app.use('/coverage', express.static(__dirname +  
'/../test/coverage/reports'));

app.listen(3000);
console.log('Listening on port 3000...');
var express = require('express');
var application = express();
var CorporateCustomer=function(req, res) {

  var customer=[
				{customerName:'Mukesh Ambani',companyName:'Relaince'}
				];
  res.send(customer);
};
application.get('/customers',CorporateCustomer);

var server = application.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Listening at http://localhost:8088",host,port)
})
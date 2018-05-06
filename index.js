// This is the main routing file
// All routes get resolved with its response function and return values as JSON

// Express is used for routing
var express = require('express')
var app = express()
// Eko library included 
var imported_fn = require('./calculate_fn')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// All GET routes defined here
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "case01.html" );
})
app.get('/case02', function (req, res) {
  res.sendFile( __dirname + "/" + "case02.html" );
})
app.get('/case03', function (req, res) {
  res.sendFile( __dirname + "/" + "case03.html" );
})

// All POST requests routes defined here

app.post('/case01', urlencodedParser, function (req, res) {
  response = {
     data:req.body.case01
  };
  var value = imported_fn.case01_algo(response);
  res.end(JSON.stringify({data:value}));
})

app.post('/case02', urlencodedParser, function (req, res) {
  response = {
     data:req.body.case02
  };
  var value = imported_fn.case02_algo(response);
  if(req.body.case02 == "E-D"){
    res.end(JSON.stringify({ED:value}));
  }
  else if(req.body.case02 == "E-E")
  {
    var value_case022 = imported_fn.case022_algo({data:req.body.case02});
    res.end(JSON.stringify({EE:value_case022}));
  }
  else if(req.body.case02 == "E-E-cost-20")
  {
    var value_case023 = imported_fn.case023_algo({data:req.body.case02});
    res.end(JSON.stringify({EE_cost_20:value_case023}));
  }
  else{
    let dta= {}
    dta[req.body.case02]=value;
    res.end(JSON.stringify(dta));
  }
  
})

app.post('/case03', urlencodedParser, function (req, res) {
  response = {
     data:req.body.case03
  };
  var value = imported_fn.case03_algo(response);
  if(req.body.case03 == "E-E"){
    var value = imported_fn.case03_algo(response);
    res.end(JSON.stringify({EE:value}));
  }
  else if(req.body.case03 == "E-D")
  {
    var value_case032 = imported_fn.case032_algo({data:"E-D"});
    res.end(JSON.stringify({ED:value_case032}));
  }
else{
    let dta= {}
    dta[req.body.case03]=value;
    res.end(JSON.stringify(dta));

}
}),


// Port config
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

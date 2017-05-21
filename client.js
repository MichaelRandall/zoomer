const http = require('http');

var options = {
  host:'localhost',
  port:'8081',
  path:'https://api.zoomcare.com/zoomapi-service/v2/rest/content/type/event'
};

var callback = function(response){
  var body = '';
  response.on('data',(data)=>{
    body += data;
  });

  response.on('end',()=>{
    console.log(body);
  });
}

var req = http.request(options, callback);
req.end();

var fs = require("fs");
var filecontent = "";
fs.readFile("contenttosend.txt", function(err, buf) {
  console.log(buf.toString());
  filecontent = buf.toString();
});

var http = require("http");

var options = {
    host: "127.0.0.1",
    port: 3000,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "N/A"
    }
};

var fs = require("fs");
fs.readFile("contenttosend.txt", function(err, buf) {
  for(var i =0; i< 1; i++){
    var req = http.request(options, function (res) {
        var responseString = "";
        res.on("data", function (data) {
            responseString += data;
            // save all the data from response
        });
        res.on("end", function () {
            console.log(responseString); 
            // print to console when response ends
        });
    }).write("sending..at Count: " + i + " TS:" +  new Date() + "    ---" + buf.toString());
}
});






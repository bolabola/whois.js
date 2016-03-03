var net = require('net');
var servers = require(__dirname + "/servers.js");
var Promise  = require('bluebird');

function whois(url){
  return new Promise(function(resolve, reject) {
    var urlParts = url.split(".");
    var tld = urlParts[urlParts.length - 1];
    var data = '';

    var socket = net.createConnection(43, servers[tld], function() {
      // TODO: Do some servers require the 'domain' string before the 
      //   requested domin string
      //   example: socket.write("domain " + "startupjersey.com"+ "\r\n", "ascii");
      socket.write(url +"\r");
    });

    socket.setEncoding('ascii');

    socket.on("data", function(response) {
      data = data + response;
    }).on("close", function(error) {
      resolve(data)
    });
  });
}

module.exports = whois;

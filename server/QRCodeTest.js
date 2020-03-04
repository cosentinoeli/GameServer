const QRCode = require("qrcode")
const ip = require("ip")

/* Declarations */
const serverIP = ip.address()
const port = 3000;
let address = 'http://' + serverIP.toString() + ':' + port.toString()

/* log QRCode version of address */
QRCode.toString(address, {type:'terminal'}, function (err, url) {
    console.log(typeof(url))
    //document.body.appendChild(url)
})

var canvas = document.getElementById('canvas');
QRCode.toCanvas(canvas, address, function (error) {
    if (error) console.error(error)
    console.log('success!');
  })
const QRCode = require("qrcode")
const ip = require("ip")

/* Declarations */
const serverIP = ip.address()
const port = 3000;
let address = 'http://' + serverIP.toString() + ':' + port.toString()

/* log QRCode version of address */
QRCode.toString(address, {type:'terminal'}, function (err, url) {
    console.log(url)
})

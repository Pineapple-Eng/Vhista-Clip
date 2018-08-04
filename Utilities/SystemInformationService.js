const bleno = require('bleno')
const util = require('util')

var LoadAverageCharacteristic = require('./LoadAverage')
var UptimeCharacteristic = require('./Uptime')
var MemoryCharacteristic = require('./Memory')

function SystemInformationService() {

  bleno.PrimaryService.call(this, {
    uuid: 'ff51b30e-d7e2-4d93-8842-a7c4a57dfb07',
    characteristics: [
      new LoadAverageCharacteristic(),
      new UptimeCharacteristic(),
      new MemoryCharacteristic()
    ]
  });
};

util.inherits(SystemInformationService, bleno.PrimaryService)
module.exports = SystemInformationService
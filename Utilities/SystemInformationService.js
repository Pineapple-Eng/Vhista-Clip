const bleno = require('bleno')
const util = require('util')

var LoadAverageCharacteristic = require('./Characteristics/LoadAverage')
var UptimeCharacteristic = require('./Characteristics/Uptime')
var MemoryCharacteristic = require('./Characteristics/Memory')

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
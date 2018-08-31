const bleno = require('bleno')
var SystemInformationService = require('./Utilities/SystemInformationService')
var systemInformationService = new SystemInformationService()

console.log(`
____   ____.__    .__          __                   _________ .__  .__        
\   \ /   /|  |__ |__| _______/  |______            \_   ___ \|  | |__|_____  
 \   Y   / |  |  \|  |/  ___/\   __\__  \    ______ /    \  \/|  | |  \____ \ 
  \     /  |   Y  \  |\___ \  |  |  / __ \_ /_____/ \     \___|  |_|  |  |_> >
   \___/   |___|  /__/____  > |__| (____  /          \______  /____/__|   __/ 
                \/        \/            \/                  \/        |__|    
`)

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);
    if (state === 'poweredOn') {
      bleno.startAdvertising(bleno.name, [systemInformationService.uuid]);
    }
    else {
      bleno.stopAdvertising();
    }
})

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' +
      (error ? 'error ' + error : 'success')
    );
    if (!error) {
      bleno.setServices([
        systemInformationService
      ])
    }
})
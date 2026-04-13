const { triggerAlerts } = require('./services/alertService');

async function testTwilio() {
    console.log("Testing Argus Alert System...");
    // Mock threat message
    await triggerAlerts("TEST ALERT: Armed intruder detected at Library.");
}

testTwilio();
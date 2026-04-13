// services/alertService.js
const twilio = require('twilio');
require('dotenv').config();

// Twilio setup (.env la keys add panniko)
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const triggerAlerts = async (threatDetails) => {
    const message = `🚨 CRITICAL THREAT DETECTED: ${threatDetails}. Campus locked down.`;

    // 1. Alert to School/College Head Office (Socket.io event)
    console.log(`💻 [HEAD OFFICE DASHBOARD] Red Alert: ${message}`);
    // io.emit('campus_emergency', { alert: message }); 

    // 2. Alert to Cops/911 (Twilio SMS/Call)
    try {
        // Uncomment to send real SMS
        /*
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE,
            to: process.env.COPS_PHONE // Testing number kudu
        });
        */
        console.log(`🚓 [TWILIO] SMS dispatched to 911/Cops: ${message}`);
    } catch (error) {
        console.error("Alert failed:", error);
    }
};

module.exports = { triggerAlerts };
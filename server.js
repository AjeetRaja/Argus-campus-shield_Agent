const { analyzeFrame } = require('./services/visionService'); 
const { triggerAlerts } = require('./services/alertService');
const fs = require('fs');

async function argusMainLoop() {
    console.log("\n🛡️ Argus-Campus-Shield: Monitoring Campus Feed...");

    try {
        // Step 1: Read the test frame
        const imageBase64 = fs.readFileSync('./test-frame.jpg', { encoding: 'base64' });

        console.log("🔍 Argus is analyzing the scene via Groq...");
        
        // Step 2: Send to Groq for Vision Analysis
        const analysis = await analyzeFrame(imageBase64);
        console.log("📝 AI Analysis:", analysis);

        // Step 3: Decision Logic
        if (analysis.includes("THREAT_DETECTED") || analysis.includes("weapon")) {
            console.log("🚨 ALERT: THREAT CONFIRMED BY ARGUS!");
            await triggerAlerts(analysis);
        } else {
            console.log("✅ Status: Secure. No threats detected.");
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log("❌ Error: 'test-frame.jpg' file-ah folder-la kaanom macha! Adha save pannitu run pannu.");
        } else {
            console.error("Critical Error:", err.message);
        }
    }
}

// Initial start
argusMainLoop();
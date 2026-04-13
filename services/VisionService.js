const Groq = require("groq-sdk");
require('dotenv').config();

const groq = new Groq({ 
    apiKey: process.env.GROQ_API_KEY || process.env.GRO_API_KEY 
});

const analyzeFrame = async (base64Image) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            { 
              type: "text", 
              text: "Analyze for weapons or active threats. Respond strictly with 'THREAT_DETECTED' + type of weapon if found. Else respond 'SAFE'." 
            },
            { 
              type: "image_url", 
              image_url: { url: `data:image/jpeg;base64,${base64Image}` } 
            }
          ],
        },
      ],
      // 🔥 Latest Model from your list:
      model: "meta-llama/llama-4-scout-17b-16e-instruct", 
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Groq Vision Error:", error.message);
    return "ERROR";
  }
};

module.exports = { analyzeFrame };
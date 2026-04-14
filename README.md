# Argus Campus Shield 🛡️
**Next-Gen AI Surveillance & Real-Time Security Agent**

Argus Campus Shield is an autonomous AI security agent designed to provide proactive surveillance for educational institutions. By leveraging Llama 4 Vision and high-speed inference via Groq, Argus monitors live camera feeds, detects potential security threats, and triggers instantaneous alerts to campus authorities.

---

## 🌟 Key Features

* **Real-Time Visual Reasoning:** Uses Llama 4 Vision to understand complex security scenarios.
* **Ultra-Low Latency Alerting:** Powered by Groq’s LPU technology for near-instant detection.
* **Multi-Channel Communication:** Integrated with Twilio API for immediate SMS alerts.
* **Privacy-Centric Design:** Only processes critical alert frames for security auditing.

---

## 🏗️ Technical Architecture

Argus operates on a sophisticated feedback loop:
1. **Vision Intake:** Captures frames from the surveillance stream.
2. **Contextual Analysis:** Sends processed frames to Llama 4 Vision.
3. **Heuristic Evaluation:** Evaluates threat levels against safety protocols.
4. **Action Execution:** Triggers Twilio SMS and logs the incident.

---

## 🛠️ Tech Stack

* **Language:** Node.js (v18+)
* **LLM / Vision:** Llama 4 Vision (via Groq Cloud)
* **Alert System:** Twilio Messaging API
* **Environment:** Dotenv (Secure Secret Management)

---

## 🚀 Getting Started

1. **Clone the repository:**
   `git clone https://github.com/AjeetRaja/Argus-campus-shield_Agent.git`
2. **Install dependencies:**
   `npm install`
3. **Setup `.env`:**
   Configure your GROQ and TWILIO keys.
4. **Launch:**
   `node server.js`

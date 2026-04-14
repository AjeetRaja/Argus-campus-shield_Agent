Argus Campus Shield 🛡️
Next-Gen AI Surveillance & Real-Time Security AgentArgus Campus Shield is an autonomous AI security agent designed to provide proactive surveillance for educational institutions. By leveraging Llama 4 Vision and high-speed inference via Groq, Argus monitors live camera feeds, detects potential security threats, and triggers instantaneous alerts to campus authorities.
🌟 Key Features
Real-Time Visual Reasoning: Uses Llama 4 Vision to not just "see" but understand complex security scenarios (e.g., unauthorized access after hours, suspicious loitering).Ultra-Low Latency Alerting: Powered by Groq’s LPU technology, ensuring that the time between detection and notification is minimized.Multi-Channel Communication: Integrated with Twilio API to deliver immediate SMS alerts to security personnel.Privacy-Centric Design: Implements localized frame processing. Only metadata and critical alert frames are utilized for security auditing.Scalable Architecture: Built on a robust Node.js/Express backend, ready for deployment across multiple campus zones.
🏗️ Technical Architecture
Argus operates on a sophisticated feedback loop:Vision Intake: Captures frames from the surveillance stream.Contextual Analysis: Sends processed frames to the Llama 4 Vision model for threat assessment.Heuristic Evaluation: The agent evaluates the model's output against predefined safety protocols.Action Execution: If a threat is confirmed, the AlertService triggers a Twilio SMS and logs the incident.
🛠️ Tech Stack
Category  Technology
Language: Node.js (v18+)
LLM / Vision: Llama 4 Vision (via Groq Cloud)
Alert System: Twilio Messaging API
Environment: Dotenv (Secure Secret Management)
Version Control: Git & GitHub
🚀 Getting Started
PrerequisitesNode.js installed on your machine.Groq API Key.Twilio Account (SID, Auth Token, and a Verified Number).InstallationClone the repository:Bashgit clone https://github.com/AjeetRaja/Argus-campus-shield_Agent.git
cd Argus-campus-shield_Agent
Install dependencies:Bashnpm install
Configure Environment Variables:Create a .env file in the root directory:Code snippetGROQ_API_KEY=your_groq_key_here
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TO_NUMBER=+91xxxxxxxxxx
FROM_NUMBER=+1xxxxxxxxxx
Launch the Agent:Bashnode server.js
🛡️ Roadmap[ ] Dashboard UI for real-time monitoring.[ ] Integration with IP Camera RTSP streams.[ ] Multi-agent coordination for large-scale campus coverage.🤝 ContributingContributions are welcome! Please feel free to submit a Pull Request.
⚖️ LicenseDistributed under the MIT License.
See LICENSE for more information.Developed by Ajeet Raja AI/ML Engineer & Fullstack Developer

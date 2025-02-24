# 🔥 Firefly Backend (Winner at SIH-2024, and Vihaan 007 (by DTU))

🚀 **Firefly** is a **Dynamic Fire Evacuation and Rescue System** that uses real-time fire detection, BLE-based indoor localization, and AI-driven navigation to guide occupants to safety while providing first responders with critical data for efficient rescue operations.

## 🌟 About Firefly
During fire emergencies, traditional evacuation systems rely on static exit routes and fail to adapt to real-time fire spread. Additionally, GPS does not work indoors, making it difficult to locate occupants accurately. **Firefly** addresses these issues by:

✅ Using **BLE-based trilateration** (currently proximation) for precise indoor localization of individuals without GPS.  
✅ Dynamically **guiding occupants** to the safest exits based on real-time fire data.  
✅ **Instantly notifying** fire stations with live fire spread data and occupant locations.  
✅ Assisting firefighters by **highlighting trapped individuals** and optimal rescue paths.  

## ⚙️ Features
- **Real-Time Fire Detection** 🔥
- **Indoor Positioning System (IPS) using BLE** 📍
- **Dynamic Evacuation Route Planning** 🚪
- **Live Data Sharing with Firefighters** 🚒
- **Efficient Fire Spread Monitoring** 📡
- **User-Friendly API for Mobile and IoT Integration** 🌍

## 📂 Project Repositories
Firefly consists of multiple components, each handled in separate repositories:

- 📱 **[Firefly Mobile App](https://github.com/GulatiGarvit/Firefly-SIH-App)** – Flutter-based app for occupants' evacuation guidance.
- 💻 **[Firestation & Firefighter Portal](#)** - React and Typescript based web-portal, showing occupants' live location and navigation feed.
- 🤖 **[Firefly Hardware (Arduino)](https://github.com/GulatiGarvit/Firefly-SIH-ESP/tree/main)** – Code for fire sensors and BLE transmission.
- 🗺 **[Firefly Navigation (Python)](https://github.com/timetooth/SIH-nav)** – Path planning for safe evacuation, fire spread prediction using Cellular Automaton.

## 🏗 Backend Tech Stack
- **Node.js** (Express.js) – API Server
- **MySQL** – Database for storing user, fire, and location data 
- **Sequelize**  Object Relational Mapping, to convert MySQL data into javascript objects

## 🔧 Installation & Setup (Backend)
```bash
# Clone the repository
git clone https://github.com/your-repo/firefly-backend.git
cd firefly-backend

# Install dependencies
npm install

# Set up environment variables (.env file required)
# Start the server
npm start
```

## 🎖 Contributors
A huge shout-out to the amazing **Escape Character team** who made this possible! 🚀

- **Garvit Gulati** (**Team Lead**, Flutter, Hardware) 
- **Ishita** (Backend)
- **Parth Kapoor** (Full-stack, Firefighter/Firestation Portal)
- **Rehan Bansal** (Frontend, Firefighter/Firestation Portal)
- **Keshav Singla** (Navigation and Spread Prediction)
- **Archit Dhagat** (Research and Documentation)

## 📬 Contact & Feedback
We'd love to hear from you! Feel free to **open an issue** or contribute to this project.

📧 Email: [ggulati_be22@thapar.edu](mailto:ggulati_be22@thapar.edu)  
🔗 Linkedin: [Garvit Gulati](https://linkedin.com/in/gulatigarvit)  

---
Made with ❤️ by Team Escape Character 🚀

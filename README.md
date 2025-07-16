Real-Time Chat Application

A real-time messaging web app that allows users to exchange text and image messages instantly. Built with a focus on clean architecture and efficient communication using Socket.IO, MongoDB, and Cloudinary.

 Features
 
🔐 User Authentication (JWT + Cookies)

💬 Real-time messaging via Socket.IO

🖼️ Image sharing (base64 upload to Cloudinary)

🟢 Online user indicator

📥 Messages stored in MongoDB

🔄 Live updates without page reload

🛠️ Tech Stack
Frontend

React

Axios

Socket.IO Client

Backend

Node.js + Express

MongoDB + Mongoose

Socket.IO

Cloudinary SDK

dotenv + cookie-parser

▶️ Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/fullstack-chat-app.git
cd fullstack-chat-app
2. Install dependencies
bash
Copy
Edit
cd backend
npm install

cd ../frontend
npm install
3. Start the development servers
bash
Copy
Edit
# In backend folder
npm run dev

# In frontend folder (separate terminal)
npm run dev

📷 Image Upload
Image messages are uploaded as base64 strings to Cloudinary. The backend handles secure upload and stores the image URL in MongoDB.

🔄 To-Do / Enhancements 
✍️ Typing indicators

✅ "Seen" or delivered status

🎨 UI polish: chat bubbles, responsiveness

🧪 Unit & integration tests

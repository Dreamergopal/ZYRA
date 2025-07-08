🧠 ZYRA — create. connect. chronical.

ZYRA is a modern full-stack blogging platform designed for creators, coders, and thinkers to share ideas, connect with others, and document their legacy. Built with React.js, Tailwind CSS, Appwrite, and Redux, ZYRA offers a fast, elegant, and fully responsive user experience with dark-themed green-glow aesthetics.


📌 Features
✅ User Authentication (Login/Register using Appwrite)

🏷️ Create & Manage Posts

🗃️ All Posts Page with filterable cards

👤 Profile-Based Avatar

🌗 Dark Theme with Neon Green Glow

📱 Fully Responsive Design

📩 Contact Page + About Us section

🧾 Privacy Policy & Terms Pages

🚀 Optimized for Deployment



⚙️ Tech Stack
Frontend	   Backend (Auth)	    State Management    	Styling	        Deployment
React.js  	  Appwrite	          Redux Toolkit	    Tailwind CSS	  Vercel / Netlify


📂 Folder Structure
ZYRA/
│
├── public/
│   └── logo.png, social icons, index.html
│
├── src/
│   ├── appwrite/            # Appwrite config & services
│   ├── component/           # Reusable UI components (Header, Footer, etc.)
│   ├── pages/               # All route-level components (Home, Post, etc.)
│   ├── store/               # Redux slice for auth
│   ├── App.js               # Main app with routes
│   └── index.js             # Entry point
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md


🚀 Getting Started
1. Clone the Repository
git clone https://github.com/Dreamergopal/ZYRA.git
cd ZYRA

3. Install Dependencies
npm install


5. Setup Appwrite Config
Create an appwriteConfig.js inside src/appwrite/:
export default {
  url: "https://cloud.appwrite.io/v1",
  projectID: "your-project-id",
  databaseID: "your-db-id",
  collectionID: "your-collection-id",
  bucketID: "your-bucket-id",
};


4. Run Locally
npm start

🛡️ Authentication Flow (Appwrite)
Uses Appwrite's Account service to handle:

User registration

Email-password login

Logout

Redux stores auth status and user info.

🎨 UI/UX Design
Green glowing aesthetic with a modern, minimal design

Tailwind utilities for fast styling

Fully responsive across all screen sizes

Glowing CTA buttons, subtle shadows, and animated cards

Mobile menu with smooth transition

📄 Pages
/ — Home with hero, CTA, featured posts

/login — User login

/post — Add new blog post

/all-post — Explore all published posts

/about — About ZYRA platform

/contact — Contact form

/privacy — Privacy Policy

/terms — Terms of Service

🔒 Data Privacy
ZYRA respects your privacy. User data is handled securely via Appwrite. A detailed Privacy Policy is included.


🤝 Contributing
Pull requests are welcome! Feel free to open issues or suggestions.

🧑‍💻 Author
Gopal Kumar Burman

<p align="left"> 
  <a href="https://www.linkedin.com/in/gopal-kumar-burman-824aa4277" target="_blank"> <img src="https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /> </a>

  <a href="https://x.com/dreamergopal" target="_blank"> <img src="https://img.shields.io/badge/X(Twitter)-000000?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /> </a>
  
  <a href="https://www.instagram.com/dreamergopal" target="_blank"> <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /> </a>
</p>

📝 License
This project is open-source and free to use for educational or personal purposes.

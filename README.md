# AI Image Genrator
The **AI Image Generator** is a web-based application that allows users to create images from text prompts using cutting-edge AI models like DALL·E or Stable Diffusion.  
It provides a seamless interface for generating, viewing, and saving AI-generated artwork.  
Users can log in, manage their image history, and use credits for each generation.  
Built with the MERN stack, it ensures performance, scalability, and modern design.  
This project demonstrates the integration of AI with full-stack development to deliver a creative, real-world user experience.


## Tech Stack

**Frontened :**
- React.js 18+
- Tailwind CSS 3+
- React Router 6+

**Backend:**
- Node.js 16+
- Express.js $+
- MongoDB 6+ (with Mongoose ODM)

**Authentication**
- JWT
- bcrypt.js

**Utilities:**
- Axios (HTTP client)

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- Postman (for API Testing)
- VS Code

> _Knowledge of javascript, React, Node.js, Express, and MongoDb will be helpful.
### Screenshots

### HOME PAGE
![Home Page](./screenshots/Home%20page.png)

### LOGIN/SIGNUP PAGE
![SignUp Page](./screenshots/Signup%20page.png)
![Login Page](./screenshots/after%20login.png)
![After Login Page](./screenshots/after%20login.png)

### RESULT PAGE
![Result Page 1](./screenshots/result%20page%201.png)
![Result loading](./screenshots/result%20loading.png)
![Result created](./screenshots/result%20created.png)

### PRICING PAGE FOR CREDIT
![PRICING](./screenshots/pricing%20page.png)

### INSTALLATION

**Backened :**
cd server
npm install
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_image_api_key

# To start the server
npm run dev

**Frontened :**
cd ../client
npm install
npm start

# To start the vite server
npm run dev


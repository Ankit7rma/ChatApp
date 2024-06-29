# Real-Time Chat App with MERN Stack

Welcome to the Real-Time Chat App repository! This project is a comprehensive guide for beginners to build a fully functional real-time chat application using the MERN stack. The application includes features such as real-time messaging, online user status, authentication and authorization, global state management, error handling, and deployment.

## Features

🌟 **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI  
🎃 **Authentication & Authorization**: Secure user authentication and authorization using JWT (JSON Web Tokens)  
👾 **Real-Time Messaging**: Instant messaging capabilities powered by Socket.io for real-time communication  
🚀 **Online User Status**: Display online users with the help of Socket.io and React Context  
👌 **Global State Management**: Efficient state management using Zustand  
🐞 **Error Handling**: Robust error handling both on the server and client sides  
⭐ **Deployment**: Step-by-step guide to deploy your app for free!

## Tech Stack

- **Frontend**: React, TailwindCSS, Daisy UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Authentication**: JWT
- **State Management**: Zustand

## Prerequisites

- Node.js
- MongoDB
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:Ankit7rma/ChatApp.git
cd ChatApp
```

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `server` directory and add the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SOCKET_PORT=your_socket_port
```

### 4. Run the application

#### Backend

```bash
cd server
npm run dev
```

#### Frontend

```bash
cd client
npm start
```

### 5. Open the application

Navigate to `http://localhost:3000` in your browser to see the application in action.

## Features in Detail

### Authentication & Authorization

- User registration and login
- Secure authentication with JWT
- Protected routes for authenticated users

### Real-Time Messaging

- Real-time chat using Socket.io
- Instant message delivery and updates

### Online User Status

- Display of online users in real-time
- Integration with Socket.io and React Context for seamless updates

### Global State Management

- Efficient state management with Zustand
- Easy to manage and scale application state

### Error Handling

- Comprehensive error handling on the server-side with Express
- Client-side error handling with React

### Deployment

- Detailed steps to deploy the application for free
- Tips and best practices for deployment

## Deployment

To deploy your application, follow these steps:

1. Choose a hosting provider for your backend (e.g., Heroku, Vercel).
2. Deploy your MongoDB database to a cloud service (e.g., MongoDB Atlas).
3. Configure environment variables in your hosting provider.
4. Deploy your frontend to a static site hosting service (e.g., Netlify, Vercel).

For detailed deployment instructions, refer to the [Deployment Guide](./DEPLOYMENT.md).

## Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) to learn how you can contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

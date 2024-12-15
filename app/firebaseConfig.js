// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import auth instead of analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDyjAi5iREOQDWRoZ8z0_9_WTT2uLTYBQ",
  authDomain: "auth-project-6e179.firebaseapp.com",
  projectId: "auth-project-6e179",
  storageBucket: "auth-project-6e179.appspot.com",
  messagingSenderId: "103095098072",
  appId: "1:103095098072:web:2bbf9ae74957e43e95d5ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app and authentication module
export { app };

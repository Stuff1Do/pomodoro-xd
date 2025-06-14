
  // Import the Firebase SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDw8g7b3_1gW8nYvZ2U0Z0gjF5l3DowNZk",
    authDomain: "studyxd-b741a.firebaseapp.com",
    projectId: "studyxd-b741a",
    storageBucket: "studyxd-b741a.appspot.com",
    messagingSenderId: "386637742539",
    appId: "1:386637742539:web:3c92c57dc920d08bf4364e"
  };

  // Initialize Firebase and Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  // Make Firestore available globally if needed
  window.db = db;

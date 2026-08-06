import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo8-qR2itRD9soj5BWwQxbFa6DQnL5430",
  authDomain: "school-election-21f2c.firebaseapp.com",
  projectId: "school-election-21f2c",
  storageBucket: "school-election-21f2c.firebasestorage.app",
  messagingSenderId: "823063390392",
  appId: "1:823063390392:web:826815ca38b017a5a72c4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
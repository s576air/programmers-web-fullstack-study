// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase 설정, env 쓰는게 좋을듯
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase 앱 초기화
export const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD29Yn7q6HphGQ1Y31dC6ldi3W4A6VT3tA",
  authDomain: "lingo-app-5dfab.firebaseapp.com",
  projectId: "lingo-app-5dfab",
  storageBucket: "lingo-app-5dfab.appspot.com",
  messagingSenderId: "68031201790",
  appId: "1:68031201790:web:76a3498a57ca21104f80af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

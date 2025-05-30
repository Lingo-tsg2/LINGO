import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD29Yn7q6HphGQ1Y31dC6Id3W4A6VT3tA",
  authDomain: "lingo-app-5dfab.firebaseapp.com",
  projectId: "lingo-app-5dfab",
  storageBucket: "lingo-app-5dfab.appspot.com",
  messagingSenderId: "68031201790",
  appId: "1:68031201790:web:76a3498a57ca21104f80af"
};

// Inicializa o Firebase (somente uma vez)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Logado como: ${result.user.displayName}`);
    } catch (error) {
      alert("Erro ao logar: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>Login com Google</h1>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          background: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        onClick={handleLogin}
      >
        Continuar com Google
      </button>
    </div>
  );
}


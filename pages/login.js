import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config com variáveis de ambiente
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inicializa Firebase apenas uma vez
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Bem-vindo, ${result.user.displayName}`);
    } catch (error) {
      alert("Erro ao logar: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>Entrar com Google</h1>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Continuar com Google
      </button>
    </div>
  );
}




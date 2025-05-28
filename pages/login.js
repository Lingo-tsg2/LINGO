// pages/login.js
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bem-vindo ao LINGO</h1>
      {!user ? (
        <button onClick={handleLogin} style={{ padding: "1rem", fontSize: "1.2rem" }}>
          Continuar com Google
        </button>
      ) : (
        <div>
          <p>Olá, {user.displayName}!</p>
          <img src={user.photoURL} alt="Foto de perfil" width={100} style={{ borderRadius: "50%" }} />
        </div>
      )}
    </div>
  );
}

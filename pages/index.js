
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Bem-vindo ao LINGO</h1>
      <p>Um só mundo. Um só idioma. Todas as vozes.</p>
      <a href="/login">
        <button style={{ padding: "1rem", marginTop: "2rem" }}>
          Ir para o Login
        </button>
      </a>
    </div>
  );
}

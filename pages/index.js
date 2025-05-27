
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '10%' }}>
      <Head>
        <title>LINGO - Um Só Mundo</title>
      </Head>
      <h1>🌍 LINGO</h1>
      <p>Um só mundo. Um só idioma. Todas as vozes.</p>
      <Link href="/chat">
        <button style={{ padding: '10px 20px', marginTop: '20px', fontSize: '16px' }}>
          Ir para o Chat Traduzido
        </button>
      </Link>
    </div>
  );
}

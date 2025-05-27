
import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [translated, setTranslated] = useState('');

  async function handleTranslate() {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input })
    });
    const data = await res.json();
    setTranslated(data.translated);
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Chat com Tradução</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem"
        style={{ padding: '10px', width: '60%' }}
      />
      <button onClick={handleTranslate} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Traduzir
      </button>
      <p style={{ marginTop: '20px' }}><strong>Traduzido:</strong> {translated}</p>
    </div>
  );
}

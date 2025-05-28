import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [translated, setTranslated] = useState('');
  const [language, setLanguage] = useState('en');

  // Texto para fala (TTS)
  function speak(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  }

  // Fala para texto (STT)
  function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      alert('Erro ao reconhecer voz: ' + event.error);
    };

    recognition.start();
  }

  async function handleTranslate() {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input, targetLang: language })
    });
    const data = await res.json();
    setTranslated(data.translated);
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Chat com Tradução e Voz</h2>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fale ou digite sua mensagem"
          style={{ padding: '10px', width: '60%' }}
        />

        <button onClick={startListening} style={{ marginLeft: '10px' }}>🎙️ Falar</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: '10px' }}
        >
          <option value="en">Inglês 🇺🇸</option>
          <option value="es">Espanhol 🇪🇸</option>
          <option value="fr">Francês 🇫🇷</option>
          <option value="de">Alemão 🇩🇪</option>
          <option value="it">Italiano 🇮🇹</option>
          <option value="ja">Japonês 🇯🇵</option>
          <option value="zh">Chinês 🇨🇳</option>
          <option value="ru">Russo 🇷🇺</option>
          <option value="pt">Português 🇧🇷</option>
        </select>

        <button onClick={handleTranslate} style={{ marginLeft: '10px', padding: '10px' }}>
          Traduzir
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Traduzido:</strong> {translated}</p>

        {translated && (
          <button onClick={() => speak(translated, language)}>🔊 Ouvir tradução</button>
        )}
      </div>
    </div>
  );
}



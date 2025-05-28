export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text, targetLang = 'en' } = req.body;

    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
      const data = await response.json();
      const translated = data[0][0][0];

      res.status(200).json({ translated });
    } catch (error) {
      res.status(500).json({ error: 'Falha ao traduzir' });
    }
  } else {
    res.status(405).end();
  }
}



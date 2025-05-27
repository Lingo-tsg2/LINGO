
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const translated = `[TRADUZIDO]: ${text}`; // Simulação da tradução
    res.status(200).json({ translated });
  } else {
    res.status(405).end();
  }
}

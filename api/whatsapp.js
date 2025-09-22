module.exports = (req, res) => {
  try {
    const phoneNumber = process.env.NUMERO_WHATTS;

    if (!phoneNumber) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Variável de ambiente NUMERO_WHATTS não configurada.');
      return;
    }

    const message = 'Olá!\n\nConfirmo minha presença no almoço pós-cartório da Jessica e Wagner no dia 20/12/2025!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    res.statusCode = 302;
    res.setHeader('Location', url);
    res.end();
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Erro interno na função WhatsApp.');
  }
};



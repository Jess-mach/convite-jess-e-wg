export default function handler(req, res) {
  const phoneNumber = process.env.NUMERO_WHATTS;

  if (!phoneNumber) {
    res.status(500).send('Env NUMERO_WHATTS não configurada.');
    return;
  }

  const message = 'Olá!%0A%0AConfirmo minha presença no almoço pós-cartório da Jessica e Wagner no dia 20/12/2025!';
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  res.writeHead(302, { Location: url });
  res.end();
}



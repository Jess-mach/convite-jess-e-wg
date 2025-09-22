// Esta é uma Serverless Function.
// Ela será executada no servidor, não no navegador do usuário.

export default function handler(req, res) {
  // 1. Pega o número de uma variável de ambiente segura.
  //    Você vai configurar essa variável na sua plataforma de hospedagem (Vercel, Netlify, etc.).
  const numeroWhatsapp = process.env.NUMERO_WHATTS;

  // 2. Define a mensagem padrão.
  const textoMensagem =
    'Olá!\n\nConfirmo minha presença no almoço pós-cartório da Jessica e Wagner no dia 20/12/2025!';

  // 3. Monta a URL final do WhatsApp.
  const whatsappUrl = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
    textoMensagem,
  )}`;

  // 4. Redireciona o usuário para a URL do WhatsApp.
  res.redirect(302, whatsappUrl);
}
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, question, mail } = req.body;

    // Create a SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'Slepov103@yandex.ru',
        pass: 'dqngjvbnwlvzwzmu'
      }
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `Slepov103@yandex.ru`,
      to: 'support@blz-lifts.ru, azovtsevnikita@mail.ru, Cherman.vova@yandex.ru, nozin61@mail.ru',
      subject: 'Новая заявка в blz-lifts.ru!',
      text: `Name: ${name}\nPhone: ${phone}\nQuestion: ${question} \nMail: ${mail}`,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Message sent successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
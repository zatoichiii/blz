import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, phone, recaptcha } = req.body;

      // 1. Проверка reCAPTCHA
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe&response=${recaptcha}`
      );

      if (!response.data.success) {
        return res.status(400).json({
          error: 'Ошибка проверки reCAPTCHA',
          details: response.data['error-codes']
        });
      }

      // 2. Отправка почты
      const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'Slepov103@yandex.ru',
          pass: 'dqngjvbnwlvzwzmu'
        }
      });

      const info = await transporter.sendMail({
        from: `Slepov103@yandex.ru`,
        to: 'support@blz-lifts.ru, azovtsevnikita@mail.ru, Cherman.vova@yandex.ru, nozin61@mail.ru',
        subject: 'Новая заявка в blz-lifts.ru!',
        text: `Имя: ${name}\nТелефон: ${phone}\n`,
        html: `
          <h1>Новая заявка</h1>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        `
      });

      console.log('Сообщение отправлено: %s', info.messageId);
      return res.status(200).json({ success: true });

    } catch (error) {
      console.error('Ошибка:', error);
      return res.status(500).json({
        error: 'Внутренняя ошибка сервера',
        details: error.message
      });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
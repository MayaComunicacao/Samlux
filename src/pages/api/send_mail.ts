/* eslint-disable prettier/prettier */
import * as SibApivV3Sdk from '@sendinblue/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { generateBudgetEmail } from '../../utils/emails/email-budget';
import { generateContactEmail } from '../../utils/emails/email-contact';
import { generateContactWorkUsEmail } from '../../utils/emails/email-contact-work';
import { generateCustomProjectEmail } from '../../utils/emails/email-custom-project';
import { formatDateToHumanDates } from '../../utils/intl';

const api_key = `${process.env.VERCEL_ENV === 'production'
  ? process.env.MAIL_API_KEY
  : process.env.NEXT_PUBLIC_MAIL_API_KEY
  }`;

const from_email = 'comercial@samlux.com.br';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const body = req.body;

  let html = '';

  const now = new Date();

  if (body.type === 'projeto_personalizado') {
    const ctx = {
      name: `${body.name}`,
      email: `${body.email}`,
      phone: `${body.fone}`,
      city: `${body.city}`,
      message: `${body.msg}`,
      date: formatDateToHumanDates(now).toString()
    };

    html = await generateCustomProjectEmail(ctx);
  }

  if (body.type === 'contato') {
    const ctx = {
      name: `${body.name}`,
      email: `${body.email}`,
      phone: `${body.fone}`,
      city: `${body.city}`,
      date: formatDateToHumanDates(now).toString()
    };

    html = await generateContactEmail(ctx);
  }

  if (body.type === 'trabalhe_conosco') {
    const ctx = {
      name: `${body.name}`,
      email: `${body.email}`,
      phone: `${body.fone}`,
      city: `${body.city}`,
      date: formatDateToHumanDates(now).toString()
    };

    html = await generateContactWorkUsEmail(ctx);
  }

  if (body.type === 'orcamento') {
    const ctx = {
      name: `${body.name}`,
      email: `${body.email}`,
      phone: `${body.fone}`,
      city: `${body.city}`,
      items: body.products,
      date: formatDateToHumanDates(now).toString()
    };

    html = await generateBudgetEmail(ctx);
  }

  const apiInstance = new SibApivV3Sdk.TransactionalEmailsApi();

  apiInstance.setApiKey(
    SibApivV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    api_key
  );

  if (body.type !== 'trabalhe_conosco') {
    await apiInstance
      .sendTransacEmail({
        subject: `${body.subject}`,
        sender: { email: from_email, name: 'Samlux' },
        to: [{ name: 'Samlux', email: from_email }],
        htmlContent: `${html}`
      })
      .then((data) => res.status(200).send('ok'))
      .catch((error) => {
        console.log(error);
        res.status(500).end();
      });
  } else {
    await apiInstance
      .sendTransacEmail({
        subject: `${body.subject}`,
        sender: { email: from_email, name: 'Samlux' },
        to: [{ name: 'Samlux', email: from_email }],
        htmlContent: `${html}`,
        attachment: [
          {
            name: `anexo.${body.fileType}`,
            content: `${body.anexo}`
          }
        ]
      })
      .then((data) => res.status(200).send('ok'))
      .catch((error) => {
        console.log(error);
        res.status(500).end();
      });
  }
}

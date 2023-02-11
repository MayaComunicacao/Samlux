import * as SibApivV3Sdk from '@sendinblue/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createEmailContactProject,
  createEmailCustomProject,
  createEmailOrcamentoProject
} from '../../contants/emails';

const api_key = `${
  process.env.VERCEL_ENV === 'production'
    ? process.env.MAIL_API_KEY
    : process.env.NEXT_PUBLIC_MAIL_API_KEY
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const body = req.body;

  let html = '';

  if (body.type === 'projeto_personalizado') {
    html = createEmailCustomProject({
      nome: body.name,
      email: body.email,
      telefone: body.fone,
      cidade: body.city,
      msg: body.msg,
      subject: body.subject
    });
  }

  if (body.type === 'contato') {
    html = createEmailContactProject({
      nome: body.name,
      email: body.email,
      telefone: body.fone,
      cidade: body.city,
      subject: body.subject
    });
  }

  if (body.type === 'trabalhe_conosco') {
    html = createEmailContactProject({
      nome: body.name,
      email: body.email,
      telefone: body.fone,
      cidade: body.city,
      subject: body.subject
    });
  }

  if (body.type === 'orcamento') {
    html = createEmailOrcamentoProject({
      nome: body.name,
      email: body.email,
      telefone: body.fone,
      items: body.products,
      subject: body.subject
    });
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
        sender: { email: 'comercial@samlux.com.br', name: 'Samlux' },
        to: [{ name: 'John Doe', email: 'comercial@samlux.com.br' }],
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
        sender: { email: 'comercial@samlux.com.br', name: 'Samlux' },
        to: [{ name: 'John Doe', email: 'comercial@samlux.com.br' }],
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

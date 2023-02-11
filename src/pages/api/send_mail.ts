import * as SibApivV3Sdk from '@sendinblue/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createEmailContactProject,
  createEmailCustomProject
} from '../../contants/emails';

const api_key =
  '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';

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

  const apiInstance = new SibApivV3Sdk.TransactionalEmailsApi();

  apiInstance.setApiKey(
    SibApivV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    api_key
  );

  await apiInstance
    .sendTransacEmail({
      subject: `${body.subject}`,
      sender: { email: 'comercial@samlux.com.br', name: 'Samlux' },
      to: [{ name: 'John Doe', email: 'renan@mayacomunicacao.com.br' }],
      htmlContent: `${html}`
    })
    .then((data) => res.status(200).send('ok'))
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    });
}

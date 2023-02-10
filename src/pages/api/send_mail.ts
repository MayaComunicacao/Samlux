import type { NextApiRequest, NextApiResponse } from 'next';
import * as SibApivV3Sdk from '@sendinblue/client';

const api_key =
  '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';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const apiInstance = new SibApivV3Sdk.TransactionalEmailsApi();

  apiInstance.setApiKey(
    SibApivV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    api_key
  );

  apiInstance
    .sendTransacEmail({
      subject: 'Hello from the Node SDK!',
      sender: { email: 'api@sendinblue.com', name: 'Sendinblue' },
      replyTo: { email: 'api@sendinblue.com', name: 'Sendinblue' },
      to: [{ name: 'John Doe', email: 'renan@mayacomunicacao.com.br' }],
      htmlContent:
        '<html><body><h1>This is a transactional email {{params.bodyMessage}}</h1></body></html>',
      params: { bodyMessage: 'Made just for you!' }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

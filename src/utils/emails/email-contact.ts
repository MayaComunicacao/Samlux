import { readFile } from 'node:fs/promises';
import Handlebars from 'handlebars';
import mjml2html from 'mjml';

const mjmlPath = './src/mjml';

export const generateContactEmail = async (ctx: Ctx) => {
  const mjmlFile = await readFile(`${mjmlPath}/email-contato.mjml`, {
    encoding: 'utf-8'
  });

  const template = Handlebars.compile(mjmlFile);

  const mjml = template(ctx);

  const { html } = mjml2html(mjml);

  return html;
};

type Ctx = {
  name: string;
  email: string;
  phone: string;
  city: string;
  date: string;
};

import { Product } from '../components/context/context';

export interface ICreateEmailCustomProject {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  msg: string;
  subject: string;
}

export const createEmailCustomProject = ({
  nome,
  email,
  telefone,
  cidade,
  msg,
  subject
}: ICreateEmailCustomProject) => {
  return `
  <html>
    <body>
      <h1>${subject}</h1>

      <div>
        <div>
          <span>Nome: ${nome}</span>
        </div>

        <div>
          <span>Email: ${email}</span>
        </div>

        <div>
          <span>Telefone: ${telefone}</span>
        </div>

        <div>
          <span>Cidade: ${cidade}</span>
        </div>

        <div>
          <span>Mensagem: ${msg}</span>
        </div>
      </div>
    </body>
  </html>
  `;
};

export interface ICreateEmailContactProject {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  subject: string;
}

export const createEmailContactProject = ({
  nome,
  email,
  telefone,
  cidade,
  subject
}: ICreateEmailContactProject) => {
  return `
  <html>
    <body>
      <h1>${subject}</h1>

      <div>
        <div>
          <span>Nome: ${nome}</span>
        </div>

        <div>
          <span>Email: ${email}</span>
        </div>

        <div>
          <span>Telefone: ${telefone}</span>
        </div>

        <div>
          <span>Cidade: ${cidade}</span>
        </div>
      </div>
    </body>
  </html>
  `;
};

export interface ICreateEmailWorkProject {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  subject: string;
}

export const createEmailWorkProject = ({
  nome,
  email,
  telefone,
  cidade,
  subject
}: ICreateEmailWorkProject) => {
  return `
  <html>
    <body>
      <h1>${subject}</h1>

      <div>
        <div>
          <span>Nome: ${nome}</span>
        </div>

        <div>
          <span>Email: ${email}</span>
        </div>

        <div>
          <span>Telefone: ${telefone}</span>
        </div>

        <div>
          <span>Cidade: ${cidade}</span>
        </div>
      </div>
    </body>
  </html>
  `;
};

export interface ICreateEmailOrcamentoProject {
  nome: string;
  email: string;
  telefone: string;
  items: Product[];
  subject: string;
}

export const createEmailOrcamentoProject = ({
  nome,
  email,
  telefone,
  items,
  subject
}: ICreateEmailOrcamentoProject) => {
  const array_items = items
    ?.map((item) => {
      return `
      <div style="margin-bottom: 12px">
        <div>
          <span>Nome: ${item.title}</span>
        </div>
        <div>
          <span>Cod: ${item.codigo}</span>
        </div>
        <div>
          <span>Quantidade: ${item.quantidade}</span>
        </div>
        <div>
          <span>Volts: ${item.volts}</span>
        </div>
      </div>
    `;
    })
    .join('');

  return `
  <html>
    <body>
      <h1>${subject}:</h1>

      <div>
        <div>
          <span>Nome: ${nome}</span>
        </div>

        <div>
          <span>Email: ${email}</span>
        </div>

        <div>
          <span>Telefone: ${telefone}</span>
        </div>

        <div>
          <span>Produtos:</span>
        </div>

        <div style="style="display: block; margin-top: 12px;">
          ${array_items}
        </div>
      </div>
    </body>
  </html>
  `;
};

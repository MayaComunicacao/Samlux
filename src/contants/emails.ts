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

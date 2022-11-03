import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/img/logo-footer.png';
import LogoMaya from '../../assets/img/logo-maya.svg';
import Link from 'next/link';

const FooterApp = () => {
  return (
    <footer className="bg-bg pt-10 pb-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="block sm:flex">
            <ul className="text-gray min-w-full sm:min-w-[300px]">
              <li>
                <Link href="/a-empresa">
                  <a>Samlux</a>
                </Link>
              </li>
              <li>
                <Link href="/produtos/todos">
                  <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/contato/projeto-personalizado">
                  <a>Projeto personalizado</a>
                </Link>
              </li>
            </ul>
            <ul className="text-gray min-w-full sm:min-w-[300px]">
              <li>
                <Link href="/download">
                  <a>Download</a>
                </Link>
              </li>
              <li>
                <Link href="/contato/trabalhe-conosco">
                  <a>Trabalhe conosco</a>
                </Link>
              </li>
              <li>
                <Link href="/contato/fale-conosco">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[120px] sm:w-[170px]">
            <Image layout="responsive" src={Logo} alt="Logotipo Sanlux" />
          </div>
        </div>
        <p className="text-center text-sm text-gray pt-4 border-t border-t-zinc-300 mt-8">
          © Sanlux {new Date().getFullYear()} | Todos os direitos reservados.
          Desenvlvido por
          <a
            href="https://mayacomunicacao.com.br"
            className="align-middle inline-block pl-1"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              layout="intrinsic"
              src={LogoMaya}
              alt="ogotipo Maya comunicação"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterApp;

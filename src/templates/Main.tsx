import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <img
            src="/assets/images/imagotipo.png"
            alt="imagotipo"
            style={{
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          />
          <div className="font-semibold text-3xl text-gray-900"></div>
          <div className="text-xl" style={{ textAlign: 'center' }}>
            {AppConfig.description}
          </div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">Inicio</Link>
            </li>
            <li className="mr-6">
              <Link href="/meet-us/">Conócenos</Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">Sobre nosotros</Link>
            </li>
            <li className="mr-6">
              <Link href="/attention/">Entérate</Link>
            </li>
            <li className="mr-6">
              <Link href="/colaborators/">Colaboradores</Link>
            </li>
            <li className="mr-6">
              <Link href="/rules/">Concurso de Microcuento</Link>
            </li>
            {/* <li className="mr-6">
              <Link href="/gallery/">Galería</Link>
            </li> */}
            <li className="mr-6">
              <a
                href="https://wa.me/593998812708"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex' }}
              >
                Chatea con nosotros
                <img
                  src="/assets/images/whatsapp-icon.png"
                  alt="whatsapp"
                  style={{ width: '1.2em', height: '1.2em', marginLeft: '5px' }}
                />
              </a>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Creado por{' '}
        <a
          href="https://omarbramirez.github.io/omar-b-ramirez/"
          target="_blank"
          rel="noreferrer"
        >
          Omar Ramírez
        </a>
        <div>
          <ul className="footer">
            <li>
              <a
                href="https://culturaquito.com"
                target="_blank"
                rel="noreferrer"
              >
                Secretaría de Cultura de Quito
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61552905026731"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cuentame.un.poquito?igsh=MW16dXpic2FjM2xoeQ=="
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export { Main };

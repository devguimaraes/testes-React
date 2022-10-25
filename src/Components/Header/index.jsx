import React from 'react';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header>
      <div className={styles.header_background}>
        <div className={styles.logotipo}>
          <picture>
            <source
              srcSet="/imagens/logo-1024w.png"
              media="(min-width: 1024px)"
            />
            <img
              src="/imagens/logo-pequeno.png"
              className={styles.logo}
              alt="Logotipo Amigo Secreto"
            />
          </picture>
        </div>
        <div>
          <img
            src="/imagens/WavyStock.png"
            className={styles.logotipo_imagem}
            alt="Desenho 2d de mulher segurando uma lousa pequena"
          />
        </div>
      </div>
    </header>
  );
};

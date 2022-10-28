import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const navegar = () => {
    return navigate('/');
  };
  return (
    <header>
      <div className={styles.header_background}>
        <div className={styles.logotipo}>
          <button
            onClick={() => {
              navegar();
            }}
          >
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
          </button>
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

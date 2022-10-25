import { useState } from 'react';
import styles from './index.module.scss';
export const Formulario = () => {
  const [state, setState] = useState('');
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Vamos Começar!</h2>
      <form>
        <input
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button
          type="button"
          disabled={state === '' || state === 'undefined'}
          onClick={(e) => {
            setState(e.target.value);
            alert('valor enviado' + state);
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default Formulario;

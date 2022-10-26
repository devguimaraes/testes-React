import { useRef, useState } from 'react';
import useAdicionarParticipante from '../../State/Hooks/useAdicionarPartipante';
import useMensagemDeErro from '../../State/Hooks/useMensagemErro';
import styles from './index.module.scss';
export const Formulario = () => {
  const [nome, setNome] = useState('');

  const inputElemento = useRef(null);
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

  const addParticipante = (evento) => {
    evento.preventDefault();

    adicionarNaLista(nome);
    setNome('');
    inputElemento.current?.focus();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Vamos Começar!</h2>
      <form onSubmit={addParticipante}>
        <input
          ref={inputElemento}
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit" disabled={!nome}>
          Adicionar
        </button>
        {mensagemDeErro && (
          <p className={styles.erro} role="alert">
            {mensagemDeErro}
          </p>
        )}
      </form>
    </div>
  );
};

export default Formulario;

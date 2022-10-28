import { useState } from 'react';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../State/Hooks/useResultadoSorteio';
import styles from './container.module.scss';
import { BsFillDice5Fill } from 'react-icons/bs';

export const Sorteados = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoSorteio();

  const sortear = (evento) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Quem vai tirar o papelzinho?</h2>
      <section className={styles.sessao}>
        <form onSubmit={sortear}>
          <select
            className={styles.input}
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p className={styles.paragrafo}>
            Clique em sortear para descobrir quem é seu amigo secreto!
          </p>
          <button className={styles.btnSortear}>
            <BsFillDice5Fill size={24} /> Sortear!
          </button>
        </form>
        {amigoSecreto && (
          <p className={styles.amigoSecreto} role="alert">
            {amigoSecreto}
          </p>
        )}
        <img
          src="/imagens/aviao.png"
          className={styles.imgAviao}
          alt="Avião de papel na cor verde"
        />
      </section>
    </div>
  );
};

export default Sorteados;

import { useState } from 'react';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../State/Hooks/useResultadoSorteio';
import styles from './container.module.scss';

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
      <section>
        <form onSubmit={sortear}>
          <select
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
          <p>Clique em sortear para descobrir quem é seu amigo secreto!</p>
          <button>Sortear</button>
        </form>
        {amigoSecreto && (
          <p aria-label="resposta" role="alert">
            {amigoSecreto}
          </p>
        )}
      </section>
    </div>
  );
};

export default Sorteados;

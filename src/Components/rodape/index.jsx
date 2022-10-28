import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import { useSorteador } from '../../State/Hooks/useSorteador';
import styles from './rodape.module.scss';

export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const history = useNavigate();
  const sortear = useSorteador();

  const iniciarSorteio = () => {
    return history('/sorteio');
  };

  return (
    <footer>
      <div className={styles.container}>
        <button
          className={styles.btnSortear}
          disabled={participantes.length < 3}
          onClick={() => {
            sortear();
            iniciarSorteio();
          }}
        >
          Iniciar Brincadeira
        </button>
        <img
          src="./imagens/sacolas.png"
          alt="Desenho 2d de sacolas uma em frente a outra"
        />
      </div>
    </footer>
  );
};

export default Rodape;

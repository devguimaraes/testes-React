import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import styles from './rodape.module.scss';

export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const history = useNavigate();

  const iniciarSorteio = () => {
    return history('/sorteio');
  };

  return (
    <footer>
      <div>
        <button
          disabled={participantes.length < 3}
          onClick={() => {
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

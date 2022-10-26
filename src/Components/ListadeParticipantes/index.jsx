import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import styles from './index.module.scss';

export const ListaParticipantes = () => {
  const participantes = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((lista) => (
        <li key={lista}>{lista}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;

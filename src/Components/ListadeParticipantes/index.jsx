import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import styles from './index.module.scss';

export const ListaParticipantes = () => {
  const participantes = useListaDeParticipantes();

  return (
    <ul className={styles.lista}>
      {participantes.map((lista) => (
        <li className={styles.itemLista} key={lista}>
          {lista}
        </li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;

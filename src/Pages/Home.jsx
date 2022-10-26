import Formulario from '../Components/Formulario';
import { Header } from '../Components/Header';
import ListaParticipantes from '../Components/ListadeParticipantes';
import Rodape from '../Components/rodape';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </main>
    </>
  );
};

export default Home;

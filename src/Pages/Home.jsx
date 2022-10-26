import Formulario from '../Components/Formulario';
import { Header } from '../Components/Header';
import ListaParticipantes from '../Components/ListadeParticipantes';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Formulario />
        <ListaParticipantes />
      </main>
    </>
  );
};

export default Home;

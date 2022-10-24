import React from 'react';
import Formulario from './Components/Formulario';
import { Header } from './Components/Header';
import './index.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Formulario />
      </main>
    </>
  );
};

export default App;

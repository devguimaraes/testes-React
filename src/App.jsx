import React from 'react';
import Formulario from './Components/Formulario';
import { Header } from './Components/Header';
import './index.css';

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

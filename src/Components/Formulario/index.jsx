import { useState } from 'react';

export const Formulario = () => {
  const [state, setState] = useState('');
  return (
    <form>
      <input
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        type="button"
        disabled={state === '' || state === 'undefined'}
        onClick={(e) => {
          setState(e.target.value);
          alert('valor enviado' + state);
        }}
      >
        Adicionar
      </button>
    </form>
  );
};

export default Formulario;

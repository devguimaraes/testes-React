import { atom } from 'recoil';

export const listaDeParticipantesState = atom({
  key: 'listaDeParticipantesState',
  default: [],
});

export const erroState = atom({
  key: 'erroSate',
  default: '',
});

export const resultadoAmigoSecreto = atom({
  key: 'resultadoAmigoSecreto',
  default: new Map(),
});

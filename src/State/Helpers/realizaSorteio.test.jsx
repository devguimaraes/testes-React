import { realizarSorteio } from './realizarSorteio';

describe('Verifica a Lógica do Sorteio', () => {
  test('Cada participante não sorteie o proprio nome', () => {
    const participantes = ['ana', 'catarian', 'Juliana', 'Joao', 'NAFTALINA'];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});

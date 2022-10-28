import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Sorteados from '.';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../../State/Hooks/useResultadoSorteio';

jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock('../../State/Hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe('Na página Sorteio', () => {
  const participantess = ['Ana', 'Rita', 'Joana'];

  const resultado = new Map([
    ['Ana', 'Rita'],
    ['Joana', 'Ana'],
    ['Rita', 'Joana'],
  ]);

  beforeEach(() => {
    useListaDeParticipantes.mockReturnValue(participantess);
    useResultadoSorteio.mockReturnValue(resultado);
  });

  test('Verifica se todos os participantes vão tirar um amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteados />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantess.length + 1);
  });

  test('Verifica se amigo secreto sorteado é renderizado na tela quando solicitado.', () => {
    render(
      <RecoilRoot>
        <Sorteados />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participantess[0],
      },
    });

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });
});

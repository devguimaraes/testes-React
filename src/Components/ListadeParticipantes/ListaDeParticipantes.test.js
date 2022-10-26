import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from '.';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';

jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe('Verifica se a lista de participantes comeca vazia', () => {
  beforeEach(() => {
    (useListaDeParticipantes).mockReturnValue([])
  });

  test('Verifica se a lista comeca vazia', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('merda, não to entendo nada, mas a lista precisa ter participantes', () => {
  const participantes = ['Ana', 'Rita', 'Joana', 'Iracema', 'Carolina'];
  beforeEach(() => {
    (useListaDeParticipantes).mockReturnValue(participantes)
  });
  test('Verifica se a lista', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantes.length);
  });
});

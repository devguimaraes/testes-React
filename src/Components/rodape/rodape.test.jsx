import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../../State/Hooks/useListaDeParticipantes';
import { Rodape } from './index';

jest.mock('../../State/Hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockadoNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockadoNavegacao,
  };
});

describe('Verificacao dos participantes do sorteio', () => {
  beforeEach(() => {
    useListaDeParticipantes.mockReturnValue([]);
  });

  test('Botao desabilitado se tiver menos que tres partcipantes na lista de sorteio', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    const imagem = screen.getByRole('img');

    expect(imagem).toBeInTheDocument();
    expect(botao).toBeDisabled(0);
  });
});

describe('Verifica se botao fica habilitado com mais de tres participantes na lista', () => {
  beforeEach(() => {
    useListaDeParticipantes.mockReturnValue(['Ana', 'Rita', 'Iracema']);
  });

  test('Botao habilitado', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    expect(botao).not.toBeDisabled();
  });

  test('A brincadeira foi inicializada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    expect(mockadoNavegacao).toHaveBeenCalledTimes(1);
    expect(mockadoNavegacao).toHaveBeenCalledWith('/sorteio');
  });
});

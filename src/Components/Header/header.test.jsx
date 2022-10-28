import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '.';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockLink,
  };
});

const mockLink = jest.fn();

describe('teste de navegacao no Header', () => {
  beforeEach(() => {});
  test('Verifica se botao leva para página principal', () => {
    render(<Header />);

    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    expect(mockLink).toHaveBeenCalledTimes(1);
    expect(mockLink).toHaveBeenCalledWith('/');
  });
});

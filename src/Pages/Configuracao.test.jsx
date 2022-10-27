import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Home from './Home';
const mockadoNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockadoNavegacao,
  };
});

describe('Descreve a página de configuracao', () => {
  test('Deve Ser renderizada corretamento', () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Sorteados from '../Components/Sorteados';

describe('Teste de snapshot tela Sorteio', () => {
  test('Deve ser renderizado corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Sorteados />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});

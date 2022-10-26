/* eslint-disable no-restricted-globals */
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import { Formulario } from './index';

describe('Comportamento do formulário:', () => {
  //Testar quando o input estiver vázio não será possivel adicionar novos participantes
  test('Validacao de input', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const formulario = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === 'form'
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    const TextBotao = screen.getByText('Adicionar');

    expect(formulario).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
    expect(TextBotao).toBeInTheDocument();
  });

  test('Adicionar participante caso o input não esteja vazio', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: String,
      },
    });

    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  test('Lista não pode receber nomes duplicados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'nome',
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'nome',
      },
    });

    fireEvent.click(botao);

    const mensagemErro = screen.getByRole('alert');

    expect(mensagemErro.textContent).toBe(
      'Nomes duplicados não são permitidos'
    );
  });

  test('Mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'nome',
      },
    });

    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'nome',
      },
    });

    fireEvent.click(botao);

    let mensagemErro = screen.queryByRole('alert');

    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemErro = screen.queryByRole('alert');
    expect(mensagemErro).toBeNull();
  });
});

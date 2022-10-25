/* eslint-disable no-restricted-globals */
import { render, screen } from '@testing-library/react';
import { Formulario } from './index';

//Testar quando o input estiver vázio não será possivel adicionar novos participantes
test('Validacao de input', () => {
  render(<Formulario />);
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

/* test( () => {
  render(<Formulario />);

  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );
  const botao = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
}); */

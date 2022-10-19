export const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Insira os nomes dos participantes" />
      <button disabled={true} type="button">
        Adicionar
      </button>
    </form>
  );
};

export default Formulario;

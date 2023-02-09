const clientes = require("./clientes.json");

function filtraApartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtraApartamentosSemComplemento(clientes);

console.log(filtrados);
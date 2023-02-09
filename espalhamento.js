const cliente = {
  nome: "João",
  idade: 46,
  email: "joaozinho@dominio.com",
  telefone: ["90100000", "921110011"],
};

cliente.enderecos = [
  {
    titulo: "Minha casa",
    rua: "Rua das Industrias",
    numero: 337,
    complemento: "Apt. 7",
    bairro: "industrial",
    apartamento: true,
  },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}...`);
  console.log(`Ligando para ${telefoneResidencial}...`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);

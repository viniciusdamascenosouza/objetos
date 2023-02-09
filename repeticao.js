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

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if(tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]};`);
  }
}

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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")) {
    console.log("Erro! É necessário ter um endereço cadastrado.")
}
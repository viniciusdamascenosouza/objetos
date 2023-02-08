const cliente = {
  nome: "João",
  idade: 46,
  email: "joaozinho@dominio.com",
  telefone: ["90100000", "921110011"],
};

cliente.endereco = {
  rua: "Rua das Industrias",
  numero: "337",
  complemento: "Apt. 7",
  bairro: "industrial",
  apartamento: true,
  casa: false,
};

console.log(cliente.endereco["rua"]);

// OBS.: UM ARRAY ARMAZENADO DENTRO DE UM OBEJETO PODE SER ACESSADO E MANIPULADO COMO UM ARRAY QUALQUER;
// ASSIM COMO UM OBJETO ARAMAZENADO DENTRO DE UM OUTRO OBJETO TAMBEM PODE SER ACESSADO COMO UM OBJETO COMUM;

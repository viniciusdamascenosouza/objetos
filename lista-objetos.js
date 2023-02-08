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

cliente.enderecos.push({
  titulo: "Meu trabalho",
  rua: "Rua Hogwarts",
  numero: 111,
  complemento: false,
  bairro: "Espanha",
  apartamento: false,
});

// console.log(cliente.enderecos[1].numero);

const filtraEndereco = cliente.enderecos.filter(
  (endereco) => endereco.numero < 200
);

console.log(filtraEndereco);

// NESTE CASO É POSSIVEL FILTRAR DE VÁRIAS MANEIRAS, POR NÚMEROS MAIORES OU MENORES, SE É APARTAMENTO,
// PELO BAIRRO, ETC


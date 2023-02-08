const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12233445",
    email: "andre@dominio.com",
  };
  
  console.log(
      `O cliente ${cliente["nome"]} de ${cliente["idade"]} anos de idade, os três primeiros digitos de seu cpf são ${cliente["cpf"].substring(0, 3)}, para contactá-lo é necessário enviar um email em ${cliente["email"]}.`
      );

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`)
})

console.log(chaves);

console.log(cliente["nome"]);
console.log(cliente.idade);
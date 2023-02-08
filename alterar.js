let pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

pessoa.telefone = "139291929192";

// console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

// console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa;

console.log(novaPessoa);

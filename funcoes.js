const cliente = {
  nome: "João",
  idade: 46,
  email: "joaozinho@dominio.com",
  telefone: ["90100000", "921110011"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado! Novo Saldo: R$${this.saldo},00.`);
    }
  },
};

cliente.efetuaPagamento(150);
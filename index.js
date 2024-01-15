const tel = document.getElementById("telefone"); // Seletor do campo de telefone

tel.addEventListener("keypress", (e) => mascaraTelefone(e.target.value));
tel.addEventListener("change", (e) => mascaraTelefone(e.target.value));

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "");

  if (valor.length < 7) {
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  } else {
    valor = valor.replace(/^(\d{2})(\d{5})/g, "($1) $2-");
  }

  tel.value = valor;
};

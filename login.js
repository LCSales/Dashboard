// ✅ Função de transição global
function irPara(url) {
  document.body.classList.add("saindo");
  setTimeout(() => { window.location = url; }, 500);
}

function login() {
  const email   = document.getElementById("email").value;
  const senha   = document.getElementById("senha").value;
  const loading = document.getElementById("loading");

  loading.innerText = "Verificando...";

  setTimeout(() => {
    if (email === "backoffice@gointernet.com.br" && senha === "Go@backoff") {
      loading.innerText = " Entrando...";
      localStorage.setItem("login", "true");

      setTimeout(() => {
        irPara("index.html"); //  Com transição suave
      }, 1000);

    } else {
      loading.innerText = "❌ Email ou senha inválidos";
    }
  }, 1500);
}

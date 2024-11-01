document.addEventListener("DOMContentLoaded", function() {
    const nomeInput = document.querySelector(".Nome");
    const senhaInput = document.querySelector(".pass");
    const enviarButton = document.querySelector(".btn-log");
  
    enviarButton.addEventListener("click", function() {
      const nome = nomeInput.value;
      const senha = senhaInput.value;
  
      if (nome.trim() === "" || senha.trim() === "") {
        alert("Por favor, preencha todos os campos.");
      } else {
        
        alert("Campos preenchidos corretamente!");
        location.href = 'welc.html'
      }
    });
  });
  
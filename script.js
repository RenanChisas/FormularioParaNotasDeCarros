let placa = document.querySelector("#placa");
let veiculo = document.querySelector("#veiculo");
let cor = document.querySelector("#cor");
let ano = document.querySelector("#ano");
let servico = document.querySelector("#servicoprestado")
let btncop = document.querySelector("#btncop")
let checkboxAtivos = [];
const checkboxes = document.querySelectorAll('.checkboxDisplay input[type="checkbox"]');



function TextoCheckBox() {
  let textServiço = ""; 
  for (let i = 0; i < checkboxAtivos.length; i++) {
    const servico = checkboxAtivos[i].toUpperCase();

    if (i === checkboxAtivos.length - 1 && checkboxAtivos.length > 1) {
      textServiço += ` E ${servico}`;
    } else if (i === checkboxAtivos.length - 2 || i === checkboxAtivos.length - 1 ) {
      textServiço += ` ${servico}`;
    } else {
      textServiço += ` ${servico},`;
    }
  }
  return textServiço.trim(); 
}

function atualizarResultado() {
  const textServiço = TextoCheckBox();


  let textFormat = `VEICULO: ${(veiculo.value).toUpperCase()}
PLACA: ${(placa.value).toUpperCase()} 
COR: ${(cor.value).toUpperCase()}
ANO: ${(ano.value).toUpperCase()}
SERVIÇO DE ${servico.value} DE ${textServiço}
`;

  resultado.textContent = textFormat;
}



checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedValues = Array.from(
      document.querySelectorAll('.checkboxDisplay input[type="checkbox"]:checked')
    ).map(cb => cb.value);
    checkboxAtivos = checkedValues
    atualizarResultado()
  });
});


btncop.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.textContent)
})

servico.addEventListener("change", () => {
    atualizarResultado()  
})

placa.addEventListener("keyup", () => {
    atualizarResultado()    
})

veiculo.addEventListener("keyup", () => {
    atualizarResultado()
})

cor.addEventListener("keyup", () => {
    atualizarResultado()
})

ano.addEventListener("keyup", () => {
    atualizarResultado()
})
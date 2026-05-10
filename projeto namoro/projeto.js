const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

botaoNao.addEventListener("mouseover", () => {

    botaoNao.style.position = "absolute";

    const largura = window.innerWidth - 150;
    const altura = window.innerHeight - 150;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
});

botaoSim.addEventListener("click", () => {

    document.body.innerHTML = `
        <div class="final">
         <h1>Muito obrigado ❤️</h1>
        </div>
    `;
});
// Sugestões automáticas (IA simulada)
const sugestoes = [
    "GTA V",
    "EA Sports FC 25",
    "Call of Duty MW3",
    "Cyberpunk 2077",
    "The Legend of Zelda",
    "Minecraft",
    "Fortnite",
    "Valorant",
    "Elden Ring",
    "Red Dead Redemption 2"
  ];
  
  const input = document.getElementById("searchInput");
  const box = document.getElementById("suggestions");
  
  input.addEventListener("input", e => {
    const valor = e.target.value.toLowerCase();
    box.innerHTML = "";
    if (valor) {
      const filtradas = sugestoes.filter(s => s.toLowerCase().includes(valor));
      filtradas.forEach(s => {
        const div = document.createElement("div");
        div.textContent = s;
        div.onclick = () => {
          input.value = s;
          box.innerHTML = "";
        };
        box.appendChild(div);
      });
    }
  });
  
  // Botão de alto contraste
  const contrasteBtn = document.getElementById("contrasteBtn");
  contrasteBtn.addEventListener("click", () => {
    document.body.classList.toggle("contraste");
  });
  
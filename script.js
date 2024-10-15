document.getElementById("botao").addEventListener("click", function() {
    const maisSection = document.getElementById("mais");

    if (maisSection.style.display === "none") {
        maisSection.style.display = "block";
        this.textContent = "Mostrar Menos";
    } else {
        maisSection.style.display = "none";
        this.textContent = "Mostrar Mais";
    }
});

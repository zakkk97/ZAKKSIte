// Seleziona il pulsante e il menu
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector(".menu");

// Aggiungi un listener per il clic sul pulsante
console.log("Menu button:", menuButton);
console.log("Menu:", menu);

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open"); // Aggiunge o rimuove la classe "open"
});

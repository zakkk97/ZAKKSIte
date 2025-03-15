document.addEventListener("click", function playAudioOnce() {
    let audio = document.getElementById("background-audio");
    if (audio.paused) {
        audio.play().catch(error => console.log("Errore riproduzione audio:", error));
    }
    document.removeEventListener("click", playAudioOnce); // Rimuove il listener dopo il primo click
});

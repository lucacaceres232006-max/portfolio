document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault();

    alert("¡Mensaje enviado correctamente!");

    this.reset();
});
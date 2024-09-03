const send = document.getElementById("enviar");
const text = document.getElementById("nombre");
const msg = document.getElementById("mensaje");

send.addEventListener("click", () => {
    msg.textContent = "Hola " + text.value;
})

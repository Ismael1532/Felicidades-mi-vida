function mostrarMensaje(numero) {
    let mensajes = [
        "💌 Mensaje 1: Eres la persona más especial en mi vida. ❤️",
        "💌 Mensaje 2: Cada día a tu lado es una bendición. ✨",
        "💌 Mensaje 3: Eres mi felicidad y mi amor infinito. 💕",
        "💌 Mensaje 4: Gracias por existir. ¡Te amo! 🌸"
    ];
    document.getElementById("mensaje-secreto").innerText = mensajes[numero - 1];
}

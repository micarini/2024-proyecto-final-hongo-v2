document.addEventListener("DOMContentLoaded", function () {

    //seleccionamos el formulario del footer
    const newsletterForm = document.getElementById("newsletterForm");

    //agregamos un evento 'submit' al formulario
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); //evita el envío del formulario por defecto (no recarga la página ni envia los datos al servidor)

        const emailInput = document.getElementById("emailFooter").value; //obtenemos el valor del input del email 

        //validar si el correo contiene "@" y termina con ".com"
        if (emailInput.includes("@") && emailInput.endsWith(".com")) {
            alert("¡Correo válido! Formulario enviado.");
        } else {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentsForm");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.querySelector("input[name='name']").value.trim(); //obtenemos el valor del input nombre de otra forma ya q son mas, primero selecciona el input especifico, obtiene el valor con value y trim es para eliminar espacios en blanco y al final
        const emailInput = document.querySelector("input[name='email']").value.trim();
        const commentInput = document.querySelector("textarea[name='comment']").value.trim();

        //expresión regular: solo letras y espacios, mínimo 2 caracteres
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

        //validaciones
        if (nameInput === "") { //si el nombre esta vacio aparece un alert
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (!nameRegex.test(nameInput)) {
            alert("El nombre debe tener al menos 2 letras y no contener números ni caracteres especiales.");
            return;
        } //test() es un método de las expresiones regulares en js. verifica si el texto (nameInput en este caso) cumple con el patrón definido en la expresión regular (nameRegex).
        //si test(nameInput) es false (nombre no válido), el ! lo convierte en true y se ejecuta el código dentro del if.
        //si test(nameInput) es true (nombre válido), el ! lo convierte en false y no se ejecuta el bloque dentro del if.

        if (!emailInput.includes("@") || !emailInput.endsWith(".com")) {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
            return;
        }

        if (commentInput === "") {
            alert("Por favor, ingresa un comentario.");
            return;
        }

        alert("¡Formulario válido! Enviado correctamente.");
        commentForm.submit();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // verifico con localStorage si el usuario ya activó el modo oscuro previamente
    if (localStorage.getItem("modo-oscuro") === "activado") {
        body.classList.add("modo-oscuro"); //si existe y tiene el valor "activado", se activa el modo oscuro, añadiendo la clase modo-oscuro al body y marcando el checkbox correspondiente.
        toggleButton.checked = true; // aseguro que el checkbox esté marcado
    }

    function cambiarModoOscuro() {
        //el método .classList.toggle() agrega o quita la clase modo-oscuro del elemento body. si la clase no está presente, toggle() la agrega. si la clase ya está presente, toggle() la elimina.
        body.classList.toggle("modo-oscuro");

        // guarda el estado del modo oscuro en localStorage
        if (body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modo-oscuro", "activado"); // guardo que está activo
        } else {
            localStorage.removeItem("modo-oscuro"); // si se desactiva, removemos el item
        }
    } //cuando el usuario cambia el estado del modo oscuro (marcando o desmarcando el checkbox), la clase modo-oscuro se alterna en el body. si el modo oscuro está activado, se guarda en localStorage con setItem(), de modo que persista. si se desactiva el modo oscuro, se elimina el valor de localStorage con removeItem().

    toggleButton.addEventListener("change", cambiarModoOscuro);

});

document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("btnSubscribe");

    subscribeBtn.addEventListener("click", function () {
        const emailInput = document.getElementById("emailInput").value.trim(); //obtiene el valor del input y quita espacios extra

        if (emailInput.includes("@") && emailInput.endsWith(".com")) {
            alert("¡Correo válido! Formulario enviado.");
        } else {
            alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        }
    });
});

// Toggle mobile menu visibility
const toggle = document.querySelector(".menu-toggle-negro");
const menunegro = document.querySelector(".menu2");

toggle.addEventListener("click", () => {
  menunegro.classList.toggle("open");
});

// Toggle white mobile menu visibility

document.addEventListener("DOMContentLoaded", function () {
  const toggle2 = document.querySelector(".menu-toggle-blanco");
  const menublanco = document.querySelector(".menu");

  toggle2.addEventListener("click", () => {
    menublanco.classList.toggle("open");
  });
});
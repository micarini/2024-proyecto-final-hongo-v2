if (document.getElementsByClassName("accordion")) {
  function funAccordion() {
    let acc = document.getElementsByClassName("accordion"); //guardo el accordion

    for (let i = 0; i < acc.length; i++) { //recorre los 3 accordiones para cada uno se agrega un evento
      acc[i].addEventListener("click", function () {

        const isActive = this.classList.contains("active"); //isActive verifica si el acordeón ya tiene la clase "active", es decir, si el panel está abierto. this hace referencia al elemento en el que se hizo clic. 

        //cierra todos los paneles si el usuario hace click en un acordeon
        for (let j = 0; j < acc.length; j++) {
          let panel = acc[j].nextElementSibling;
          acc[j].classList.remove("active"); //se elimina la clase "active" de cada acordeón 
          panel.style.maxHeight = null; //oculta
          panel.style.display = "none"; // oculta el panel cuando se cierra
        } //si el usuario hace clic en un acordeón, cierra todos los paneles. 

        //si no estaba activo, se le agrega la clase "active" y se muestra el panel siguiente 
        if (!isActive) {
          this.classList.add("active");
          let panel = this.nextElementSibling;
          panel.style.display = "block"; //asegura que el panel se muestre 
        }
      });
    }
  }
  funAccordion();
};

document.addEventListener("DOMContentLoaded", function () {
  // formulario del footer
  const newsletterForm = document.getElementById("newsletterForm");

  //evento 'submit' al formulario
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); //evita el envío del formulario por defecto

    const emailInput = document.getElementById("emailFooter").value; //guardo el input

    //valida si el correo contiene "@" y termina con ".com"
    if (emailInput.includes("@") && emailInput.endsWith(".com")) {
      alert("¡Correo válido! Formulario enviado.");
    } else {
      alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //obtiene la URL de la página actual sin el dominio. si la URL es https://midominio.com/blog.html, el resultado es /blog.html
  let currentPage = window.location.pathname.split("/").pop();
  //split("/") divide la cadena en partes separadas por /, obteniendo un array
 //.pop() obtiene el último elemento del array, que sería "blog.html" en este caso

  //selecciono todos los enlaces del menú
  let menuLinks = document.querySelectorAll("nav ul li a");

  //recorro los enlaces con un for
  for (let i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].getAttribute("href") === currentPage) { //obtiene el valor del href de cada enlace
          menuLinks[i].classList.add("active"); //agrega la clase "active"
          break; //sale del bucle cuando encuentra coincidencia
      }
  }
});

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// verifico con localStorage si el usuario ya activó el modo oscuro previamente
if (localStorage.getItem("modo-oscuro") === "activado") {
  body.classList.add("modo-oscuro"); //si existe y tiene el valor "activado", se activa el modo oscuro, añadiendo la clase modo-oscuro al body y marcando el checkbox correspondiente.
  toggleButton.checked = true; // aseguro que el checkbox esté marcado
}

//alterna modo oscuro
function cambiarModoOscuro() {
  //el método .classList.toggle() agrega o quita la clase modo-oscuro del elemento body. si la clase no está presente, toggle() la agrega. si la clase ya está presente, toggle() la elimina.
  body.classList.toggle("modo-oscuro");

  // guarda el estado del modo oscuro en localStorage
  if (body.classList.contains("modo-oscuro")) {
    localStorage.setItem("modo-oscuro", "activado");
  } else {
    localStorage.removeItem("modo-oscuro");
  }

} //cuando el usuario cambia el estado del modo oscuro (marcando o desmarcando el checkbox), la clase modo-oscuro se alterna en el body. si el modo oscuro está activado, se guarda en localStorage con setItem(), de modo que persista. si se desactiva el modo oscuro, se elimina el valor de localStorage con removeItem().

toggleButton.addEventListener("change", cambiarModoOscuro);

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
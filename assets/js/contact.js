/*SLIDER CONTACT*/
//datos del slider
const sliderTexts = [ //array de objetos
    {
        number: "01",
        subtitle: "LET'S MAKE SOMETHING BEAUTIFUL",
        title: "Unlimited power and customization possibilities",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    },
    {
        number: "02",
        subtitle: "WE ARE DIGITAL MEDIA AGENCY",
        title: "We are delivering beautiful digital products for you",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    },
    {
        number: "03",
        subtitle: "WE CREATE DESIGNS AND TECHNOLOGY",
        title: "We provide high quality and cost effective services",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the typesetting industry.",
        buttonText: "ABOUT COMPANY"
    }
];

//inicializa el índice actual
let currentInd = 0;

//guardo los elementos del slider
const slideNumber = document.getElementById('slide-number');
const slideSubtitle = document.getElementById('slide-subtitle');
const slideTitle = document.getElementById('slide-title');
const slideContent = document.getElementById('slide-content');
const slideButton = document.getElementById('slide-button');

//contenedor del slider para manejar el hover
const sliderContainer = document.getElementById('slider-sec4');

//función para actualizar el contenido del slider segun en q index este
function updateContent() {
    const currentText = sliderTexts[currentInd];
    slideNumber.textContent = currentText.number;
    slideSubtitle.textContent = currentText.subtitle;
    slideTitle.textContent = currentText.title;
    slideContent.textContent = currentText.content;
    slideButton.textContent = currentText.buttonText;
}

//inicializa el contenido del slider al cargar la página
updateContent();

//función para ir al slide anterior
function anterior() {
    currentInd--; //resta 1 al índice actual (para ir al slide anterior)
    if (currentInd < 0) { 
        currentInd = sliderTexts.length - 1; //si llegamos al primer slide (índice 0), volvemos al último slide
    }
    updateContent(); //llama a la función para actualizar el contenido del slider con el nuevo índice
}

// Función para ir al siguiente slide
function posterior() {
    currentInd++; //suma 1 al indice actual para ir al siguiente slide
    if (currentInd >= sliderTexts.length) { 
        currentInd = 0; //si estamos en el último slide, volvemos al primer slide
    }
    updateContent(); //llama a la función para actualizar el contenido del slider con el nuevo índice
}

//botones para controlar el slider
document.getElementById('prev-contact').addEventListener("click", anterior);
document.getElementById('next-contact').addEventListener("click", posterior);

//intervalo para que el slider cambie automáticamente cada 3 segundos
let auto3s;
function startAuto() {
    auto3s = setInterval(posterior, 3000); // 3000 ms son 3 segundos
}

//inicia la automatización al cargar la página
startAuto();

//detiene el intervalo cuando el mouse pasa sobre el slider
sliderContainer.addEventListener("mouseenter", () => { //la diferencia entre mouseenter y mouseover es que el primero se activa cuando el mouse entra en el elemento, mientras que mouseover tambien se activa cuando el mouse entra en los elementos hijos del elemento objetivo.
    clearInterval(auto3s);
});

//reinicia el intervalo cuando el mouse sale del slider
sliderContainer.addEventListener("mouseleave", () => { //la diferencia entre mouseleave y mouseout es que el primero se activa cuando el mouse sale del elemento, mientras que mouseout tambien se activa cuando el mouse sale de los elementos hijos del elemento objetivo.
    startAuto();
});

document.addEventListener("DOMContentLoaded", function () {
    //formulario del footer
    const newsletterForm = document.getElementById("newsletterForm");

    //evento 'submit' al formulario
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const emailInput = document.getElementById("emailFooter").value;

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

const contactForm = document.getElementById("formcontact");

//evento 'submit' al formulario
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); //evita el envío del formulario por defecto

    const nameInput = document.querySelector("input[name='name']").value;
    const emailInput = document.querySelector("input[name='email']").value;
    const subjectInput = document.querySelector("input[name='subject']").value;
    const messageInput = document.querySelector("input[name='message']").value;

    //validaciones
    if (nameInput.trim() === "") { //.trim() se usa para asegurarse de que el usuario no ingrese solo espacios en los campos del formulario.
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    
    if (!emailInput.includes("@") || !emailInput.endsWith(".com")) {
        alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        return;
    }

    if (subjectInput.trim() === "") {
        alert("Por favor, ingresa un asunto.");
        return;
    }

    if (messageInput.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    alert("¡Formulario válido! Enviado correctamente.");
    contactForm.submit();
});



const toggleButton = document.getElementById("theme-toggle"); //guardo boton
const body = document.body; //guardo body

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
if(document.getElementById("contenedorSlider")){ //ponemos el if para que este codigo se ejecute si encuentra el contenedor y no se rompa nada del js
    const sliderBlog = document.getElementById("contenedorSlider");
    const botonIzquierdo = document.getElementById("prev");  
    const botonDerecho = document.getElementById("next");   
    
    const miArrayImg = [ //array de fotos q pasan en el slider
        "assets/fotos/blog-slider-post.jpg",
        "assets/fotos/blog-slider-2.webp",
        "assets/fotos/blog-slider-post-3.jpg",
        "assets/fotos/blog-slider-post-4.webp",
    ];
    
    let i = 0; //indice para saber qué imagen se está mostrando actualmente
    let autoSlide = setInterval(nextImg, 1000); //cambia automáticamente la imagen cada 1 segundo
    
    function updateImg() {
        sliderBlog.style.backgroundImage = `url(${miArrayImg[i]})`; //cambia la imagen de fondo del sliderBlog según el índice i
        sliderBlog.style.backgroundSize = "cover";  //asegura que la imagen cubra todo el espacio 
        sliderBlog.style.backgroundPosition = "center";
    }
    
    function nextImg() {
        i = (i + 1) % miArrayImg.length; //incrementa i en 1 para mostrar la siguiente imagen. % miArrayImg.length hace que el índice vuelva a 0 cuando llega al final del array, creando un efecto de ciclo infinito.
        updateImg();
    }
    
    function prevImg() {
        i = (i - 1 + miArrayImg.length) % miArrayImg.length; //decrementa i en 1 para mostrar la imagen anterior. % miArrayImg.length maneja el caso donde i es negativo, asegurando que el slider siga funcionando en bucle infinito
        updateImg();
    }
    
    //freno auto-slide permanentemente cuando el usuario interactúa con los botones
    function stopAutoSlide() {
        clearInterval(autoSlide); 
    }
    
    botonIzquierdo.addEventListener("click", function() { //si toco btn izq va a la imagen anterior
        prevImg();
        stopAutoSlide(); //freno auto-slide cuando se hace click
    });
    
    botonDerecho.addEventListener("click", function() { //si toco btn der va a la imagen siguiente
        nextImg();
        stopAutoSlide(); 
    });
    
    //inicializo con la primer imagen
    updateImg();
        
}


document.addEventListener("DOMContentLoaded", function () { // domcontentloaded garantiza que el js se ejecute solo después de que toda la estructura HTML esté disponible en el DOM para evitar problemas en los que js intenta manipular elementos que aún no se cargaron.

    //seleccionamos el formulario del footer
    const newsletterForm = document.getElementById("newsletterForm");
    
    //agregamos un evento 'submit' al formulario
    newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); //evita el envío del formulario por defecto (no recarga la página ni envia los datos al servidor)
    
    const emailInput = document.getElementById("emailFooter").value; //guardo el valor del input en una variable
    
    //validar si el correo contiene "@" y termina con ".com"
    if (emailInput.includes("@") && emailInput.endsWith(".com")) {
        alert("¡Correo válido! Formulario enviado.");
    } else {
        alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
        }
    });
});

//ultimo post fotos dinamicas
const galleryPostItems = [ //array d objetos con las fotos y las clases
    { class: "div1", imgSrc: "assets/fotos/blog-gallery-1.jpg.webp" },
    { class: "div2", imgSrc: "assets/fotos/blog-gallery-4.jpg.webp" },
    { class: "div3", imgSrc: "assets/fotos/blog-gallery-2.jpg.webp" },
    { class: "div4", imgSrc: "assets/fotos/blog-gallery-5.jpg.webp" },
    { class: "div5", imgSrc: "assets/fotos/blog-gallery-3.jpg.webp" }
];

const galleryPostContainer = document.querySelector(".gallery-post"); //guardo el container

for (let i = 0; i < galleryPostItems.length; i++) { //recorro las fotos, las hago divs y les pongo la clase correspondiente de cada foto (div1 a la 1, div2 a la 2)
    const item = galleryPostItems[i];
    const div = document.createElement("div");
    div.className = item.class;
    
    const img = document.createElement("img"); //creo un img
    img.src = item.imgSrc; //le asigno el src a la img
    
    div.appendChild(img); //agrego la img al div 
    galleryPostContainer.appendChild(div); //agrego al div al contenedor principal
}

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

//redireccion a bp
const buttons = document.querySelectorAll(".post-btn"); //selecciono todos los botones con esa clase
        
buttons.forEach(function (button) { //foreach es un método de bucle que ejecuta una función para cada elemento de la lista de botones (recorre la lista de botones y asigna un evento de clic a cada uno)
    button.addEventListener("click", function () { 
        window.location.href = "blog_post.html"; //cambia la URL de la página actual y va a bp
    });
});

//modo oscuro
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    //verifico con localStorage si el usuario ya activó el modo oscuro previamente
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
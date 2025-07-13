if (document.getElementById("product-container")) { //el codigo se ejecuta si encuentra el container
    const prodContainer = document.querySelector("#product-container"); //lo selecciono y lo guardo

    let gridProduct = document.createElement("div"); //creo un div para la grid
    gridProduct.setAttribute("id", "gridProduct"); //le signo al div un id
    prodContainer.appendChild(gridProduct); //agrego el div al contenedor

    let imgProduct = [ //array de objetos con las rutas de las img
        { img: "assets/fotos/foto8-galeria2.webp" },
        { img: "assets/fotos/foto8-galeria2-imghover.webp" },
        { img: "assets/fotos/foto3-galeria2-imghover.webp" },
        { img: "assets/fotos/foto3-galeria2.webp" },
    ];

    for (let i = 0; i < imgProduct.length; i++) { //recorro el array
        cardProd1 = document.createElement("div"); //creo un div para la card
        cardProd1.setAttribute("class", "cardProd1"); //le asigno una clase a la card

        let img = document.createElement("img"); //creo una img
        img.setAttribute("src", imgProduct[i].img); //le agrego su ruta correspondiente
        img.setAttribute("class", "foto"); //le asigno una clase a la img

        cardProd1.appendChild(img); //agrego la img a la card

        gridProduct.appendChild(cardProd1); //agrego la card a la grid
    }
}

/*GRID YOU MAY ALSO LIKE */
if (document.getElementById("product-container2")) {
    const prodContainer2 = document.querySelector("#product-container2"); //selecciono el container y lo guardo

    let gridProduct2 = document.createElement("div"); //creo un div para la grid
    gridProduct2.setAttribute("id", "gridProduct2"); //le asigno un id a la grid
    prodContainer2.appendChild(gridProduct2); //agrego la grid al contenedor 

    let productosProd = [ //array de objetos con todos los datos q tienen que tener las cards
        {
            titulo: "Sampson Wood Chair", precio: "£255.00", img: "assets/fotos/foto4-galeria1.webp",
            imgHover: "assets/fotos/foto4-galeria1-imghover.webp"
        },
        {
            titulo: "Wood Mini Stool", precio: "£255.00", img: "assets/fotos/foto7-galeria1.webp",
            imgHover: "assets/fotos/foto7-galeria1-imghover.webp"
        },
        {
            titulo: "Classic Chairs", precio: "£255.00", img: "assets/fotos/foto8-galeria1.webp",
            imgHover: "assets/fotos/foto8-galeria1-imghover.webp"
        },
        {
            titulo: "Wooden Dining Chair", precio: "£200.00", img: "assets/fotos/foto6-galeria1.webp",
            imgHover: "assets/fotos/foto6-galeria1-imghover.webp"
        }
    ];


    for (let i = 0; i < productosProd.length; i++) { //recorro el array
        cardProd2 = document.createElement("div"); //creo un div para la card
        cardProd2.setAttribute("class", "cardProd2"); //le asigno una clase a la card

        let titulo = document.createElement("h3"); //creo un h3 para el titulo
        titulo.setAttribute("class", "titulo"); //le asigno una clase al h3
        titulo.textContent = productosProd[i].titulo; //le asigno el texto al titulo que esta en el array

        let img = document.createElement("img"); //creo una img
        img.setAttribute("src", productosProd[i].img); //le asigno su ruta correspondiente
        img.setAttribute("class", "foto"); //le asigno una clase a la img

        let precio = document.createElement("p"); //creo un p para el precio
        precio.setAttribute("class", "precio"); //le asigno una clase al p
        precio.textContent = productosProd[i].precio; //le asigno el texto al precio que esta en el arrray

        cardProd2.appendChild(img); //agrego la img a la card
        cardProd2.appendChild(titulo); //agrego el titulo a la card (h3)
        cardProd2.appendChild(precio); //agrego el precio a la card (p)

        gridProduct2.appendChild(cardProd2); //agrego la card a la grid

        //evento mouseover para cambiar la imagen y q aparezca el hover
        img.addEventListener("mouseover", () => {
            img.setAttribute("src", productosProd[i].imgHover);
        });

        //evento mouseout para restaurar la imagen original
        img.addEventListener("mouseout", () => {
            img.setAttribute("src", productosProd[i].img);
        });
    }
}

/*verificacion de formulario del footer*/
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

/*MODO OSCURO */
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

/*boton de acordion que abre mas info al tocar alguno de los paneles*/
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-boton");
    let activePanel = null; //inicializo en null para saber si hay un panel actualmente abierto, para poder cerrarlo si se abre otro
    let activeButton = null; //inicializo en null para poder cambiar el estado del boton activo de + a - o viceversa

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let panel = button.nextElementSibling; //obtiene el panel siguiente al botón en el DOM
        let icon = button.querySelector(".accordion-icon");

        button.addEventListener("click", function () {
            // si hay otro panel abierto, lo cierro
            if (activePanel && activePanel !== panel) {
                activePanel.style.display = "none";
                activeButton.classList.remove("active");
                activeButton.querySelector(".accordion-icon").textContent = "+";
            }

            // cambio clases del panel actual
            if (panel.style.display === "block") {
                panel.style.display = "none";
                icon.textContent = "+";
                button.classList.remove("active");
                activePanel = null;
                activeButton = null;
            } else {
                panel.style.display = "block";
                icon.textContent = "−";
                button.classList.add("active");
                activePanel = panel;
                activeButton = button;
            }
        });
    }
});

/*verificacion del formulario dentro de reviews */
document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm"); //selecciono el form y lo guardo

    productForm.addEventListener("submit", function (event) { //la funcion se ejecuta al tocar submit
        //event representa el objeto del evento (en este caso, el intento de envío del formulario).
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
        } //test() es un método de las expresiones regulares en js. verifica si el texto (nameInput en este caso) cumple con el patrón definido en la expresión regular (nameRegex)
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
        productForm.submit();
    });
});

/*modifico en mobile ambos menus del header*/
const toggle = document.querySelector('.menu-toggle-negro');
  const menunegro = document.querySelector('.menu2');

toggle.addEventListener('click', () => {
    menunegro.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle2 = document.querySelector('.menu-toggle-blanco');
    const menublanco = document.querySelector('.menu');

    toggle2.addEventListener('click', () => {
    menublanco.classList.toggle('open');
  });
});



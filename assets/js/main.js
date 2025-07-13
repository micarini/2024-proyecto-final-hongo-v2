document.addEventListener("DOMContentLoaded", function () {
    // --- MODO OSCURO ---
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    if (toggleButton) {
        if (localStorage.getItem("modo-oscuro") === "activado") {
            body.classList.add("modo-oscuro");
            toggleButton.checked = true;
        }
        toggleButton.addEventListener("change", function () {
            body.classList.toggle("modo-oscuro");
            if (body.classList.contains("modo-oscuro")) {
                localStorage.setItem("modo-oscuro", "activado");
            } else {
                localStorage.removeItem("modo-oscuro");
            }
        });
    }

    // --- MENÚS MOBILE ---
    const toggleNegro = document.querySelector(".menu-toggle-negro");
    const menunegro = document.querySelector(".menu2");
    if (toggleNegro && menunegro) {
        toggleNegro.addEventListener("click", () => {
            menunegro.classList.toggle("open");
        });
    }
    const toggleBlanco = document.querySelector(".menu-toggle-blanco");
    const menublanco = document.querySelector(".menu");
    if (toggleBlanco && menublanco) {
        toggleBlanco.addEventListener("click", () => {
            menublanco.classList.toggle("open");
        });
    }

    // --- MENÚ ACTIVO ---
    let currentPage = window.location.pathname.split("/").pop();
    let menuLinks = document.querySelectorAll("nav ul li a");
    for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].getAttribute("href") === currentPage) {
            menuLinks[i].classList.add("active");
            break;
        }
    }

    // --- FORMULARIO NEWSLETTER FOOTER ---
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const emailInput = document.getElementById("emailFooter").value.trim();
            if (emailInput.includes("@") && emailInput.endsWith(".com")) {
                alert("¡Correo válido! Formulario enviado.");
            } else {
                alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
            }
        });
    }

    // --- FORMULARIO COMENTARIOS/REVIEWS ---
    const commentForm = document.getElementById("commentsForm");
    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const nameInput = commentForm.querySelector("input[name='name']").value.trim();
            const emailInput = commentForm.querySelector("input[name='email']").value.trim();
            const commentInput = commentForm.querySelector("textarea[name='comment']").value.trim();
            const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

            if (nameInput === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }
            if (!nameRegex.test(nameInput)) {
                alert("El nombre debe tener al menos 2 letras y no contener números ni caracteres especiales.");
                return;
            }
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
    }

    // --- FORMULARIO REVIEWS PRODUCT ---
    const productForm = document.getElementById("productForm");
    if (productForm) {
        productForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const nameInput = productForm.querySelector("input[name='name']").value.trim();
            const emailInput = productForm.querySelector("input[name='email']").value.trim();
            const commentInput = productForm.querySelector("textarea[name='comment']").value.trim();
            const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

            if (nameInput === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }
            if (!nameRegex.test(nameInput)) {
                alert("El nombre debe tener al menos 2 letras y no contener números ni caracteres especiales.");
                return;
            }
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
    }

    // --- FORMULARIO CONTACTO ---
    const contactForm = document.getElementById("formcontact");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const nameInput = contactForm.querySelector("input[name='name']").value.trim();
            const emailInput = contactForm.querySelector("input[name='email']").value.trim();
            const subjectInput = contactForm.querySelector("input[name='subject']").value.trim();
            const messageInput = contactForm.querySelector("input[name='message']").value.trim();

            if (nameInput === "") {
                alert("Por favor, ingresa tu nombre.");
                return;
            }
            if (!emailInput.includes("@") || !emailInput.endsWith(".com")) {
                alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
                return;
            }
            if (subjectInput === "") {
                alert("Por favor, ingresa un asunto.");
                return;
            }
            if (messageInput === "") {
                alert("Por favor, ingresa un mensaje.");
                return;
            }
            alert("¡Formulario válido! Enviado correctamente.");
            contactForm.submit();
        });
    }

    // BOTÓN SUBSCRIBE HEADER
    const subscribeBtn = document.getElementById("btnSubscribe");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            const emailInput = document.getElementById("emailInput").value.trim();
            if (emailInput.includes("@") && emailInput.endsWith(".com")) {
                alert("¡Correo válido! Formulario enviado.");
            } else {
                alert("Por favor, ingresa un correo electrónico válido con '@' y que termine en '.com'.");
            }
        });
    }

    // SLIDER HOME
    if (document.getElementById("slider")) {
        const sliderContent = [
            'assets/fotos/furniture-collection1.webp',
            'assets/fotos/furniture-collection2.jpg',
            'assets/fotos/furniture-collection3.jpg'
        ];
        const sliderTexts = [
            "Furniture collection",
            "Designer wall clock",
            "Modern hanging"
        ];
        let currentIndex = 0;
        const foto = document.getElementById('slider');
        const titulo = document.querySelector('#slider h2');
        const button1 = document.getElementById('button1');
        const button2 = document.getElementById('button2');
        const button3 = document.getElementById('button3');

        function updateSlider() {
            foto.style.backgroundImage = `url(${sliderContent[currentIndex]})`;
            titulo.textContent = sliderTexts[currentIndex];
            button1.classList.remove('active');
            button2.classList.remove('active');
            button3.classList.remove('active');
            if (currentIndex === 0) button1.classList.add('active');
            if (currentIndex === 1) button2.classList.add('active');
            if (currentIndex === 2) button3.classList.add('active');
        }
        function nextSlide() {
            currentIndex = (currentIndex + 1) % sliderContent.length;
            updateSlider();
        }
        let autoSlide = setInterval(nextSlide, 3000);
        function resetAutoSlide() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, 3000);
        }
        function goToImage01() { currentIndex = 0; updateSlider(); resetAutoSlide(); }
        function goToImage02() { currentIndex = 1; updateSlider(); resetAutoSlide(); }
        function goToImage03() { currentIndex = 2; updateSlider(); resetAutoSlide(); }
        button1.addEventListener("click", goToImage01);
        button2.addEventListener("click", goToImage02);
        button3.addEventListener("click", goToImage03);
        updateSlider();
    }

    // FADE IN SECTION2 HOME
    if (document.getElementById("section2")) {
        const section2 = document.getElementById("section2");
        function fadeInOnScroll() {
            const sectionPosition = section2.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (sectionPosition < screenPosition) {
                section2.classList.add("visible");
            }
        }
        window.addEventListener("scroll", fadeInOnScroll);
        fadeInOnScroll();
    }

    // GALERÍA 1 HOME
    if (document.getElementById("section3")) {
        let seccion3 = document.querySelector("#section3");
        function crearGaleria(productos, gridId) {
            let grid = document.createElement("div");
            grid.setAttribute("id", gridId);
            grid.classList.add("galeria");
            for (let i = 0; i < productos.length; i++) {
                let card = document.createElement("div");
                card.setAttribute("class", "card");
                let cardImage = document.createElement("div");
                cardImage.className = "card-image";
                let img = document.createElement("img");
                img.src = productos[i].img;
                img.className = "foto";
                img.addEventListener("mouseover", function (e) {
                    e.target.src = productos[i].imgHover;
                });
                img.addEventListener("mouseout", function (e) {
                    e.target.src = productos[i].img;
                });
                cardImage.appendChild(img);
                let iconContainer = document.createElement("div");
                iconContainer.className = "card-icons";
                let iconCart = document.createElement("i");
                iconCart.className = "fa-solid fa-cart-shopping";
                iconCart.title = "Add to Cart";
                let iconHeart = document.createElement("i");
                iconHeart.className = "fa-solid fa-heart";
                iconHeart.title = "Add to Wishlist";
                let iconEye = document.createElement("i");
                iconEye.className = "fa-solid fa-eye";
                iconEye.title = "Quick View";
                iconContainer.appendChild(iconCart);
                iconContainer.appendChild(iconHeart);
                iconContainer.appendChild(iconEye);
                card.appendChild(cardImage);
                card.appendChild(iconContainer);
                let titulo = document.createElement("h3");
                titulo.className = "titulo";
                titulo.textContent = productos[i].titulo;
                let precio = document.createElement("p");
                precio.className = "precio";
                precio.textContent = productos[i].precio;
                card.appendChild(titulo);
                card.appendChild(precio);
                grid.appendChild(card);
            }
            seccion3.appendChild(grid);
        }
        let productos1 = [
            { titulo: "Charcoal Linen Stool", precio: "£510.00", img: "assets/fotos/foto1-galeria1.webp", imgHover: "assets/fotos/foto1-galeria1-imghover.webp" },
            { titulo: "Elton Arm Chair", precio: "£50.00", img: "assets/fotos/foto2-galeria1.webp", imgHover: "assets/fotos/foto2-galeria1-imghover.webp" },
            { titulo: "Valeria ArmChair", precio: "£20.00 - £50.00", img: "assets/fotos/foto3-galeria1.webp", imgHover: "assets/fotos/foto3-galeria1-imghover.webp" },
            { titulo: "Sampson Wood Chair", precio: "£200.00", img: "assets/fotos/foto4-galeria1.webp", imgHover: "assets/fotos/foto4-galeria1-imghover.webp" },
            { titulo: "Round Coffee Table", precio: "£265.00", img: "assets/fotos/foto5-galeria1.webp", imgHover: "assets/fotos/foto5-galeria1-imghover.webp" },
            { titulo: "Wooden Dining Chair", precio: "£255.00", img: "assets/fotos/foto6-galeria1.webp", imgHover: "assets/fotos/foto6-galeria1-imghover.webp" },
            { titulo: "Wood Mini Stool", precio: "£255.00", img: "assets/fotos/foto7-galeria1.webp", imgHover: "assets/fotos/foto7-galeria1-imghover.webp" },
            { titulo: "Classic Chairs", precio: "£255.00", img: "assets/fotos/foto8-galeria1.webp", imgHover: "assets/fotos/foto8-galeria1-imghover.webp" },
        ];
        crearGaleria(productos1, "grid1");
    }

    // GALERÍA 2 HOME
    if (document.getElementById("section5")) {
        const seccion5 = document.querySelector("#section5");
        let h4_seccion5 = document.createElement("h4");
        h4_seccion5.textContent = "NEW PRODUCTS";
        seccion5.appendChild(h4_seccion5);
        let grid4 = document.createElement("div");
        grid4.setAttribute("id", "grid4");
        seccion5.appendChild(grid4);
        let productos4 = [
            { titulo: "Zinnia Lamp", precio: "£150.00", img: "assets/fotos/foto1-galeria2.webp", imgHover: "assets/fotos/foto1-galeria2-imghover.webp" },
            { titulo: "Black Wood Lamp", precio: "£2500.00", img: "assets/fotos/foto2-galeria2.webp", imgHover: "assets/fotos/foto2-galeria2-imghover.webp" },
            { titulo: "White Metal Lamp", precio: "£150.00", img: "assets/fotos/foto3-galeria2.webp", imgHover: "assets/fotos/foto3-galeria2-imghover.webp" },
            { titulo: "Brown Crystal Vase", precio: "£250.00", img: "assets/fotos/foto4-galeria2.webp", imgHover: "assets/fotos/foto4-galeria2-imghover.webp" },
            { titulo: "Aether Vase", precio: "£600.00", img: "assets/fotos/foto5-galeria2.webp", imgHover: "assets/fotos/foto5-galeria2-imghover.webp" },
            { titulo: "Antic Brown Vase", precio: "£480.00", img: "assets/fotos/foto6-galeria2.webp", imgHover: "assets/fotos/foto6-galeria2-imghover.webp" },
            { titulo: "Harrington Style Stool", precio: "£320.00", img: "assets/fotos/foto7-galeria2.webp", imgHover: "assets/fotos/foto7-galeria2-imghover.webp" },
            { titulo: "Fabric Table Lamp", precio: "£600.00", img: "assets/fotos/foto8-galeria2.webp", imgHover: "assets/fotos/foto8-galeria2-imghover.webp" }
        ];
        for (let i = 0; i < productos4.length; i++) {
            let card4 = document.createElement("div");
            card4.setAttribute("class", "card4");
            let titulo = document.createElement("h3");
            titulo.setAttribute("class", "titulo");
            titulo.textContent = productos4[i].titulo;
            let img = document.createElement("img");
            img.setAttribute("src", productos4[i].img);
            img.setAttribute("class", "foto");
            let precio = document.createElement("p");
            precio.setAttribute("class", "precio");
            precio.textContent = productos4[i].precio;
            let iconContainer = document.createElement("div");
            iconContainer.className = "card-icons";
            let iconCart = document.createElement("i");
            iconCart.className = "fa-solid fa-cart-shopping";
            iconCart.title = "Add to Cart";
            let iconHeart = document.createElement("i");
            iconHeart.className = "fa-solid fa-heart";
            iconHeart.title = "Add to Wishlist";
            let iconEye = document.createElement("i");
            iconEye.className = "fa-solid fa-eye";
            iconEye.title = "Quick View";
            iconContainer.appendChild(iconCart);
            iconContainer.appendChild(iconHeart);
            iconContainer.appendChild(iconEye);
            card4.appendChild(img);
            card4.appendChild(titulo);
            card4.appendChild(precio);
            card4.appendChild(iconContainer);
            grid4.appendChild(card4);
            img.addEventListener("mouseover", function () {
                img.setAttribute("src", productos4[i].imgHover);
            });
            img.addEventListener("mouseout", function () {
                img.setAttribute("src", productos4[i].img);
            });
        }
    }

    // GALERÍA INSTAGRAM
    if (document.querySelector(".gallery")) {
        const galleryItems = [
            { url: "https://www.instagram.com/p/B2ByAQ8Hv-9/", imgSrc: "assets/fotos/cactus-almohadon.jpg", alt: "cactus-almohadon" },
            { url: "https://www.instagram.com/p/B2BxnN_nmMY/", imgSrc: "assets/fotos/brazo-cama.jpg", alt: "brazo-cama" },
            { url: "https://www.instagram.com/p/B2Bv0ryHV9v/", imgSrc: "assets/fotos/mesita-de-luz.jpg", alt: "mesita-de-luz" },
            { url: "https://www.instagram.com/p/B2BvqzQHT-1/", imgSrc: "assets/fotos/planta-mesa.jpg", alt: "planta-mesa" },
            { url: "https://www.instagram.com/p/B2Bu5u2nKs0/", imgSrc: "assets/fotos/le-creuset-comida.jpg", alt: "le-creuset-comida" },
            { url: "https://www.instagram.com/p/B2BuwxzngSY/", imgSrc: "assets/fotos/flores-mesa.jpg", alt: "flores-mesa" },
            { url: "https://www.instagram.com/p/B2Bt1heHo4O/", imgSrc: "assets/fotos/silla-living.jpg", alt: "silla-living" },
            { url: "https://www.instagram.com/p/B2BtXaRH50I/", imgSrc: "assets/fotos/escritorio.jpg", alt: "escritorio" }
        ];
        const galleryContainer = document.querySelector(".gallery");
        for (let i = 0; i < galleryItems.length; i++) {
            const item = galleryItems[i];
            const link = document.createElement("a");
            link.href = item.url;
            const img = document.createElement("img");
            img.src = item.imgSrc;
            img.alt = item.alt;
            link.appendChild(img);
            galleryContainer.appendChild(link);
        }
    }

    // SLIDER BLOG
    if (document.getElementById("contenedorSlider")) {
        const sliderBlog = document.getElementById("contenedorSlider");
        const botonIzquierdo = document.getElementById("prev");
        const botonDerecho = document.getElementById("next");
        const miArrayImg = [
            "assets/fotos/blog-slider-post.jpg",
            "assets/fotos/blog-slider-2.webp",
            "assets/fotos/blog-slider-post-3.jpg",
            "assets/fotos/blog-slider-post-4.webp",
        ];
        let i = 0;
        let autoSlide = setInterval(nextImg, 1000);
        function updateImg() {
            sliderBlog.style.backgroundImage = `url(${miArrayImg[i]})`;
            sliderBlog.style.backgroundSize = "cover";
            sliderBlog.style.backgroundPosition = "center";
        }
        function nextImg() {
            i = (i + 1) % miArrayImg.length;
            updateImg();
        }
        function prevImg() {
            i = (i - 1 + miArrayImg.length) % miArrayImg.length;
            updateImg();
        }
        function stopAutoSlide() {
            clearInterval(autoSlide);
        }
        botonIzquierdo.addEventListener("click", function () {
            prevImg();
            stopAutoSlide();
        });
        botonDerecho.addEventListener("click", function () {
            nextImg();
            stopAutoSlide();
        });
        updateImg();
    }

    // GALERÍA BLOG POST
    if (document.querySelector(".gallery-post")) {
        const galleryPostItems = [
            { class: "div1", imgSrc: "assets/fotos/blog-gallery-1.jpg.webp" },
            { class: "div2", imgSrc: "assets/fotos/blog-gallery-4.jpg.webp" },
            { class: "div3", imgSrc: "assets/fotos/blog-gallery-2.jpg.webp" },
            { class: "div4", imgSrc: "assets/fotos/blog-gallery-5.jpg.webp" },
            { class: "div5", imgSrc: "assets/fotos/blog-gallery-3.jpg.webp" }
        ];
        const galleryPostContainer = document.querySelector(".gallery-post");
        for (let i = 0; i < galleryPostItems.length; i++) {
            const item = galleryPostItems[i];
            const div = document.createElement("div");
            div.className = item.class;
            const img = document.createElement("img");
            img.src = item.imgSrc;
            div.appendChild(img);
            galleryPostContainer.appendChild(div);
        }
    }

    // BOTONES BLOG POST REDIRECCIÓN
    if (document.querySelectorAll(".post-btn").length > 0) {
        const buttons = document.querySelectorAll(".post-btn");
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                window.location.href = "blog_post.html";
            });
        });
    }

    // SLIDER CONTACT 
    if (document.getElementById("slider-sec4")) {
        const sliderTexts = [
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
        let currentInd = 0;
        const slideNumber = document.getElementById('slide-number');
        const slideSubtitle = document.getElementById('slide-subtitle');
        const slideTitle = document.getElementById('slide-title');
        const slideContent = document.getElementById('slide-content');
        const slideButton = document.getElementById('slide-button');
        const sliderContainer = document.getElementById('slider-sec4');
        function updateContent() {
            const currentText = sliderTexts[currentInd];
            slideNumber.textContent = currentText.number;
            slideSubtitle.textContent = currentText.subtitle;
            slideTitle.textContent = currentText.title;
            slideContent.textContent = currentText.content;
            slideButton.textContent = currentText.buttonText;
        }
        updateContent();
        function anterior() {
            currentInd--;
            if (currentInd < 0) currentInd = sliderTexts.length - 1;
            updateContent();
        }
        function posterior() {
            currentInd++;
            if (currentInd >= sliderTexts.length) currentInd = 0;
            updateContent();
        }
        document.getElementById('prev-contact').addEventListener("click", anterior);
        document.getElementById('next-contact').addEventListener("click", posterior);
        let auto3s;
        function startAuto() {
            auto3s = setInterval(posterior, 3000);
        }
        startAuto();
        sliderContainer.addEventListener("mouseenter", () => { clearInterval(auto3s); });
        sliderContainer.addEventListener("mouseleave", () => { startAuto(); });
    }

    // ACCORDION STORE LOCATOR
    if (document.getElementsByClassName("accordion").length > 0) {
        let acc = document.getElementsByClassName("accordion");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                const isActive = this.classList.contains("active");
                for (let j = 0; j < acc.length; j++) {
                    let panel = acc[j].nextElementSibling;
                    acc[j].classList.remove("active");
                    panel.style.maxHeight = null;
                    panel.style.display = "none";
                }
                if (!isActive) {
                    this.classList.add("active");
                    let panel = this.nextElementSibling;
                    panel.style.display = "block";
                }
            });
        }
    }

    // ACCORDION PRODUCT (REVIEWS) 
    if (document.querySelectorAll(".accordion-boton").length > 0) {
        const buttons = document.querySelectorAll(".accordion-boton");
        let activePanel = null;
        let activeButton = null;
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            let panel = button.nextElementSibling;
            let icon = button.querySelector(".accordion-icon");
            button.addEventListener("click", function () {
                if (activePanel && activePanel !== panel) {
                    activePanel.style.display = "none";
                    activeButton.classList.remove("active");
                    activeButton.querySelector(".accordion-icon").textContent = "+";
                }
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
    }

    // GALERIA Y FILTRO SHOP
    if (document.getElementById("shop-container")) {
        const shopContainer = document.querySelector("#shop-container");
        let gridShop = document.createElement("div");
        gridShop.setAttribute("id", "gridShop");
        shopContainer.appendChild(gridShop);

        let productosShop = [ 
        { titulo: "Zinnia Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto1-galeria2.webp", imgHover: "assets/fotos/foto1-galeria2-imghover.webp", color: ["yellow", "silver"], size: ["L", "M"], rating: "3" },
        { titulo: "Black Wood Lamp", precioOriginal: "", precio: "£2500.00", img: "assets/fotos/foto2-galeria2.webp", imgHover: "assets/fotos/foto2-galeria2-imghover.webp", color: ["black", "brown"], size: ["L", "XL"], rating: ["4", "3"] },
        { titulo: "White Metal Lamp", precioOriginal: "", precio: "£150.00", img: "assets/fotos/foto3-galeria2.webp", imgHover: "assets/fotos/foto3-galeria2-imghover.webp", color: ["white", "brown"], size: ["S", "XL"], rating: ["4", "5"] },
        { titulo: "Brown Crystal Vase", precioOriginal: "", precio: "£250.00", img: "assets/fotos/foto4-galeria2.webp", imgHover: "assets/fotos/foto4-galeria2-imghover.webp", color: ["blue", "green", "brown"], size: ["S", "M"], rating: ["3", "5"] },
        { titulo: "Aether Vase", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto5-galeria2.webp", imgHover: "assets/fotos/foto5-galeria2-imghover.webp", color: ["brown", "red", "blue"], size: ["XL", "M"], rating: ["5", "4"] },
        { titulo: "Antic Brown Vase", precioOriginal: "", precio: "£480.00", img: "assets/fotos/foto6-galeria2.webp", imgHover: "assets/fotos/foto6-galeria2-imghover.webp", color: ["silver", "yellow", "black"], size: ["L", "M"], rating: ["3", "4"] },
        { titulo: "Harrington Style Stool", precioOriginal: "", precio: "£320.00", img: "assets/fotos/foto7-galeria2.webp", imgHover: "assets/fotos/foto7-galeria2-imghover.webp", color: ["yellow", "brown", "silver", "blue"], size: ["L", "S"], rating: ["5", "3"]},
        { titulo: "Fabric Table Lamp", precioOriginal: "£750.00", precio: "£600.00", img: "assets/fotos/foto8-galeria2.webp", imgHover: "assets/fotos/foto8-galeria2-imghover.webp", color: ["red", "silver", "brown", "green"], size: ["XL", "M"], rating: ["3", ""] },
        { titulo: "Lync Cali Wood", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto9-galeria-shop.webp", imgHover: "assets/fotos/foto9-galeria-shop-hover.webp", color: ["brown", "black"], size: ["L", "XL", "S"], rating: ["5", "4", "3"] },
        { titulo: "Oyster Round Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto10-galeria-shop.webp", imgHover: "assets/fotos/foto10-galeria-shop-hover.webp", color: ["blue", "yellow", "green"], size: ["L", "M"], rating: ["4", "5", "3"] },
        { titulo: "Anitz Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto11-galeria-shop.webp", imgHover: "assets/fotos/foto11-galeria-shop-hover.webp", color: ["red", "black", "yellow"], size: ["S", "M", "XL"], rating: ["3", "4", "5"] },
        { titulo: "Abbey Wood Stool", precioOriginal: "£400.00", precio: "£390.00", img: "assets/fotos/foto12-galeria-shop.webp", imgHover: "assets/fotos/foto12-galeria-shop-hover.webp", color: ["green", "blue", "black"], size: ["S", "XL"], rating: ["5", "4"] }
    ]; 

        for (let i = 0; i < productosShop.length; i++) {
            let cardShop = document.createElement("div");
            cardShop.setAttribute("class", "cardShop");
            cardShop.setAttribute("data-id", i);
            cardShop.setAttribute("data-color", productosShop[i].color);
            cardShop.setAttribute("data-size", productosShop[i].size);
            cardShop.setAttribute("data-precio", productosShop[i].precio.replace("£", ""));
            cardShop.setAttribute("data-rating", productosShop[i].rating);

            let titulo = document.createElement("h3");
            titulo.setAttribute("class", "titulo");
            titulo.textContent = productosShop[i].titulo;

            let img = document.createElement("img");
            img.setAttribute("src", productosShop[i].img);
            img.setAttribute("class", "foto");

            let precio = document.createElement("p");
            precio.setAttribute("class", "precio");
            precio.textContent = productosShop[i].precio;

            if (productosShop[i].precioOriginal) {
                let precioOriginal = parseFloat(productosShop[i].precioOriginal.replace("£", ""));
                let precioDescuento = parseFloat(productosShop[i].precio.replace("£", ""));
                let descuento = Math.round(((precioOriginal - precioDescuento) / precioOriginal) * 100);
                let descuentoBadge = document.createElement("div");
                descuentoBadge.setAttribute("class", "discount-badge");
                descuentoBadge.textContent = `-${descuento}%`;
                cardShop.appendChild(descuentoBadge);
            }

            cardShop.appendChild(img);
            cardShop.appendChild(titulo);
            cardShop.appendChild(precio);
            gridShop.appendChild(cardShop);

            img.addEventListener("mouseover", () => {
                img.setAttribute("src", productosShop[i].imgHover);
            });
            img.addEventListener("mouseout", () => {
                img.setAttribute("src", productosShop[i].img);
            });
            cardShop.addEventListener("click", () => {
                window.location.href = `product.html`;
            });
        }

        // FILTROS
        const filters = {
            color: document.querySelectorAll(".filter-color input"),
            size: document.querySelectorAll(".filter-size input"),
            rating: document.querySelectorAll(".filter-rating input")
        };

        function applyFilters() {
            let selectedColor = "";
            for (let i = 0; i < filters.color.length; i++) {
                if (filters.color[i].checked) {
                    selectedColor = filters.color[i].value;
                    break;
                }
            }
            let selectedSizes = [];
            for (let i = 0; i < filters.size.length; i++) {
                if (filters.size[i].checked) {
                    selectedSizes.push(filters.size[i].value);
                }
            }
            let selectedRatings = [];
            for (let i = 0; i < filters.rating.length; i++) {
                if (filters.rating[i].checked) {
                    selectedRatings.push(parseInt(filters.rating[i].value));
                }
            }
            let productos = document.getElementById("gridShop").getElementsByClassName("cardShop");
            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];
                let colores = producto.getAttribute("data-color").split(",");
                let tamaños = producto.getAttribute("data-size").split(",");
                let precio = parseFloat(producto.getAttribute("data-precio"));
                let ratings = producto.getAttribute("data-rating").split(",").map(Number);
                let mostrar = true;
                if (selectedColor && !colores.includes(selectedColor)) mostrar = false;
                if (selectedSizes.length > 0 && !selectedSizes.some(size => tamaños.includes(size))) mostrar = false;
                if (selectedRatings.length > 0 && !selectedRatings.some(rating => ratings.includes(rating))) mostrar = false;
                let maxPrecio = parseFloat(document.getElementById("priceRange").value);
                if (precio > maxPrecio) mostrar = false;
                producto.style.display = mostrar ? "block" : "none";
            }
        }

        applyFilters();

        for (let i = 0; i < filters.color.length; i++) {
            filters.color[i].addEventListener("change", applyFilters);
        }
        for (let i = 0; i < filters.size.length; i++) {
            filters.size[i].addEventListener("change", applyFilters);
        }
        for (let i = 0; i < filters.rating.length; i++) {
            filters.rating[i].addEventListener("change", applyFilters);
        }
        const priceRange = document.getElementById("priceRange");
        const priceText = document.getElementById("priceText");
        priceRange.addEventListener("input", () => {
            priceText.value = `Price: £0 - £${priceRange.value}`;
            applyFilters();
        });
    }

    // GALERÍA DE PRODUCT PRINCIPAL
    if (document.getElementById("product-container")) {
        const prodContainer = document.querySelector("#product-container");
        let gridProduct = document.createElement("div");
        gridProduct.setAttribute("id", "gridProduct");
        prodContainer.appendChild(gridProduct);

        let imgProduct = [
            { img: "assets/fotos/foto8-galeria2.webp" },
            { img: "assets/fotos/foto8-galeria2-imghover.webp" },
            { img: "assets/fotos/foto3-galeria2-imghover.webp" },
            { img: "assets/fotos/foto3-galeria2.webp" },
        ];

        for (let i = 0; i < imgProduct.length; i++) {
            let cardProd1 = document.createElement("div");
            cardProd1.setAttribute("class", "cardProd1");
            let img = document.createElement("img");
            img.setAttribute("src", imgProduct[i].img);
            img.setAttribute("class", "foto");
            cardProd1.appendChild(img);
            gridProduct.appendChild(cardProd1);
        }
    }

    // GALERÍA "YOU MAY ALSO LIKE"
    if (document.getElementById("product-container2")) {
        const prodContainer2 = document.querySelector("#product-container2");
        let gridProduct2 = document.createElement("div");
        gridProduct2.setAttribute("id", "gridProduct2");
        prodContainer2.appendChild(gridProduct2);

        let productosProd = [
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

        for (let i = 0; i < productosProd.length; i++) {
            let cardProd2 = document.createElement("div");
            cardProd2.setAttribute("class", "cardProd2");
            let titulo = document.createElement("h3");
            titulo.setAttribute("class", "titulo");
            titulo.textContent = productosProd[i].titulo;
            let img = document.createElement("img");
            img.setAttribute("src", productosProd[i].img);
            img.setAttribute("class", "foto");
            let precio = document.createElement("p");
            precio.setAttribute("class", "precio");
            precio.textContent = productosProd[i].precio;
            cardProd2.appendChild(img);
            cardProd2.appendChild(titulo);
            cardProd2.appendChild(precio);
            gridProduct2.appendChild(cardProd2);

            img.addEventListener("mouseover", () => {
                img.setAttribute("src", productosProd[i].imgHover);
            });
            img.addEventListener("mouseout", () => {
                img.setAttribute("src", productosProd[i].img);
            });
        }
    }

    // SIDEBAR RESPONSIVE PARA MOBILE (SHOP)
    const sidebarBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar-shop');
    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
        document.addEventListener('click', function (e) {
            if (
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                e.target !== sidebarBtn
            ) {
                sidebar.classList.remove('open');
            }
        });
    }
});
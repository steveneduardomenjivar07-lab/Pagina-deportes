
/* ==========================================
   FUTBOLMANÍA - FUNCIONES PRINCIPALES
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const themeBtn = document.getElementById("themeBtn");
    const languageBtn = document.getElementById("languageBtn");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    /* ======================================
       MODO OSCURO Y MODO CLARO
       ====================================== */

    function actualizarTema() {
        if (!themeBtn) return;

        const modoClaro = body.classList.contains("light-mode");
        const ingles = document.documentElement.lang === "en";

        themeBtn.textContent = modoClaro
            ? (ingles ? "🌙 Dark mode" : "🌙 Modo oscuro")
            : (ingles ? "☀️ Light mode" : "☀️ Modo claro");

        themeBtn.setAttribute(
            "aria-pressed",
            String(modoClaro)
        );
    }

    const temaGuardado = localStorage.getItem("temaFutbolmania");

    if (temaGuardado === "claro") {
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");
    }

    actualizarTema();

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            body.classList.toggle("light-mode");

            const temaActual = body.classList.contains("light-mode")
                ? "claro"
                : "oscuro";

            localStorage.setItem("temaFutbolmania", temaActual);

            actualizarTema();
        });
    }

    /* ======================================
       IDIOMA ESPAÑOL E INGLÉS
       ====================================== */

    const traducciones = {
        "Inicio": "Home",
        "Cuestionario": "Quiz",
        "Abrir menú": "Open menu",
        "Cerrar menú": "Close menu",
        "Cambiar tema": "Change theme",
        "Cambiar idioma": "Change language",
        "Navegación principal": "Main navigation",
        "Cambiar a inglés": "Switch to English",
        "Cambiar a español": "Switch to Spanish",
        "Controles del carrusel": "Carousel controls",
        "Controles de productos": "Product controls",
        "Productos anteriores": "Previous products",
        "Productos siguientes": "Next products",
        "Productos deportivos": "Sports products",
        "Destacados de FUTBOLMANÍA": "FUTBOLMANÍA highlights",
        "carrusel": "carousel",
        "diapositiva": "slide",
        "Diapositiva anterior": "Previous slide",
        "Diapositiva siguiente": "Next slide",
        "2. ¿Qué lenguaje crea la estructura de una página web?": "2. Which language creates a web page's structure?",
        "DEL CAMPO A": "FROM THE PITCH TO",
        "¿CÓMO LLEGA TU WEB AL": "HOW DOES YOUR WEBSITE REACH THE",
        "JAVASCRIPT:": "JAVASCRIPT:",
        "EL MOTOR": "THE ENGINE",
        "DE LA ACCIÓN": "OF ACTION",
        "jQuery:": "jQuery:",
        "MÁS ACCIÓN": "MORE ACTION",
        ", MÁS ACCIÓN": ", MORE ACTION",
        "JSON:": "JSON:",
        "⚽ QUIZ FUTBOLMANÍA": "⚽ FUTBOLMANÍA QUIZ",
        "Go to slide 1": "Go to slide 1",
        "Fútbol, tecnología y pasión por el juego.": "Football, technology and passion for the game.",
        "La pasión por la cancha también se vive detrás de cada página web.": "The passion for the pitch lives behind every website, too.",
        "Explora y aprende": "Explore and learn",
        "EL JUEGO Y LA": "THE GAME AND",
        "TECNOLOGÍA": "TECHNOLOGY",
        "Descubre cómo las tecnologías web hacen que las páginas deportivas sean dinámicas, útiles y atractivas.": "Discover how web technologies make sports websites dynamic, useful and engaging.",
        "Interactividad en la cancha": "On-field interactivity",
        "Aprende cómo JavaScript permite responder a clics, validar formularios y actualizar contenido.": "Learn how JavaScript responds to clicks, validates forms and updates content.",
        "Descubrir →": "Discover →",
        "Efectos y acciones rápidas": "Effects and quick actions",
        "Conoce una biblioteca que simplifica tareas comunes de JavaScript y los efectos visuales.": "Explore a library that simplifies common JavaScript tasks and visual effects.",
        "Datos y publicación": "Data and publishing",
        "Explora JSON, hosting y dominios para organizar datos y publicar tu sitio en internet.": "Explore JSON, hosting and domains to organize data and publish your website online.",
        "MÁS QUE UN": "MORE THAN A",
        "DEPORTE": "SPORT",
        "FUTBOLMANÍA combina la energía del fútbol con recursos de desarrollo web. El objetivo es presentar información de forma clara, visual e interactiva.": "FUTBOLMANÍA combines football energy with web development resources. The goal is to present information clearly, visually and interactively.",
        "Cómo publicar mi web →": "How to publish my site →",
        "01 / INTERACTIVIDAD": "01 / INTERACTIVITY",
        "JavaScript es un lenguaje de programación que permite agregar comportamiento e interactividad a una página web. En FUTBOLMANÍA puede controlar botones, cambiar el tema, alternar idiomas y validar respuestas.": "JavaScript is a programming language that adds behavior and interactivity to a website. FUTBOLMANÍA uses it to control buttons, switch themes and languages, and validate answers.",
        "¿Qué es JavaScript Vanilla?": "What is vanilla JavaScript?",
        "Se refiere al uso de JavaScript puro, sin depender de bibliotecas o frameworks externos. Trabaja junto con HTML y CSS para que la página responda a las acciones del usuario.": "It means using plain JavaScript without relying on external libraries or frameworks. Alongside HTML and CSS, it makes a page respond to user actions.",
        "¿Cómo se utiliza?": "How is it used?",
        "Puede escuchar eventos como clics, modificar el contenido del DOM, validar formularios, almacenar preferencias en el navegador y actualizar partes de una página.": "It can listen for events such as clicks, update the DOM, validate forms, store browser preferences, and refresh parts of a page.",
        "Ejemplo aplicado al fútbol": "A football example",
        "En una página deportiva, JavaScript puede mostrar una tarjeta de un equipo al pulsar un botón, filtrar noticias o calcular la puntuación de un cuestionario.": "On a sports website, JavaScript can show a team card when a button is clicked, filter news, or calculate a quiz score.",
        "Ejemplo práctico": "Practical example",
        "El código de ejemplo requiere un elemento HTML con id=\"miBoton\" para funcionar.": "The example requires an HTML element with id=\"miBoton\" to work.",
        "GUÍA RÁPIDA": "QUICK GUIDE",
        "¿Qué debes recordar?": "What should you remember?",
        "Permite crear interacciones sin recargar toda la página.": "It creates interactions without reloading the whole page.",
        "Manipula el DOM para cambiar contenido y estilos.": "It manipulates the DOM to change content and styles.",
        "Puede guardar preferencias usando localStorage.": "It can save preferences with localStorage.",
        "Concepto": "Concept",
        "Comprende para qué sirve.": "Understand what it does.",
        "Práctica": "Practice",
        "Prueba el ejemplo en un proyecto.": "Try the example in a project.",
        "Ir al cuestionario →": "Take the quiz →",
        "02 / EFECTOS E INTERACCIÓN": "02 / EFFECTS AND INTERACTION",
        "MENOS CÓDIGO": "LESS CODE",
        "jQuery es una biblioteca de JavaScript que facilita la selección y manipulación de elementos HTML, la gestión de eventos, los efectos visuales y algunas solicitudes de datos.": "jQuery is a JavaScript library that simplifies selecting and manipulating HTML elements, handling events, creating visual effects, and making data requests.",
        "¿Qué es jQuery?": "What is jQuery?",
        "jQuery permite realizar tareas comunes de JavaScript mediante una sintaxis más breve. Fue especialmente popular para simplificar la compatibilidad entre navegadores y crear efectos en sitios web.": "jQuery makes common JavaScript tasks shorter to write. It became especially popular for simplifying browser compatibility and adding effects to websites.",
        "¿Para qué sirve?": "What is it used for?",
        "Seleccionar elementos HTML.": "Selecting HTML elements.",
        "Responder a eventos, como los clics.": "Responding to events such as clicks.",
        "Mostrar y ocultar contenido.": "Showing and hiding content.",
        "Agregar o quitar clases CSS.": "Adding or removing CSS classes.",
        "Realizar solicitudes de datos cuando el proyecto lo necesita.": "Making data requests when a project needs them.",
        "Ejemplo aplicado a FUTBOLMANÍA": "An example for FUTBOLMANÍA",
        "El siguiente ejemplo permite mostrar u ocultar una noticia deportiva al presionar un botón.": "This example shows or hides a sports story when a button is pressed.",
        "Este ejemplo utiliza jQuery. Debes cargar la biblioteca y crear en HTML los elementos con los identificadores indicados.": "This example uses jQuery. Load the library and add HTML elements with the IDs shown.",
        "Ejemplo interactivo": "Interactive example",
        "Mostrar / ocultar noticia": "Show / hide story",
        "NOTICIA DEPORTIVA": "SPORTS NEWS",
        "¡El fútbol une a millones de aficionados alrededor del mundo!": "Football brings millions of fans together around the world!",
        "RESUMEN": "OVERVIEW",
        "Ventajas de jQuery": "Benefits of jQuery",
        "Sintaxis sencilla para tareas comunes.": "Simple syntax for common tasks.",
        "Permite trabajar con eventos y efectos.": "It works with events and effects.",
        "Facilita la manipulación del DOM.": "It simplifies DOM manipulation.",
        "¿jQuery o JavaScript?": "jQuery or JavaScript?",
        "JavaScript es el lenguaje de programación. jQuery es una biblioteca construida sobre JavaScript. Para muchos proyectos modernos, JavaScript puro también puede realizar estas tareas sin instalar una biblioteca adicional.": "JavaScript is the programming language; jQuery is a library built on top of it. For many modern projects, plain JavaScript can do these tasks without an additional library.",
        "Siguiente: JSON →": "Next: JSON →",
        "03 / ORGANIZACIÓN DE DATOS": "03 / DATA ORGANIZATION",
        "DATOS EN JUEGO": "DATA IN PLAY",
        "JSON significa JavaScript Object Notation. Es un formato de texto sencillo que permite representar e intercambiar información entre aplicaciones.": "JSON stands for JavaScript Object Notation. It is a simple text format for representing and exchanging information between applications.",
        "¿Qué es JSON?": "What is JSON?",
        "JSON organiza información mediante pares de clave y valor, objetos y arreglos. Aunque su nombre incluye JavaScript, es un formato independiente que puede utilizarse con distintos lenguajes de programación.": "JSON organizes information into key-value pairs, objects, and arrays. Despite its name, it is an independent format that works with many programming languages.",
        "Intercambiar datos entre un servidor y una página web.": "Exchanging data between a server and a website.",
        "Guardar información estructurada en archivos de texto.": "Storing structured information in text files.",
        "Representar equipos, jugadores, resultados o noticias.": "Representing teams, players, scores, or news.",
        "Facilitar el procesamiento de datos en aplicaciones.": "Making data easier to process in applications.",
        "Ejemplo de datos futbolísticos": "Football data example",
        "En este ejemplo, las claves describen los datos. Los valores pueden ser textos, números, valores booleanos, objetos, arreglos o null.": "Here, the keys describe the data. Values can be strings, numbers, booleans, objects, arrays, or null.",
        "Prueba un ejemplo interactivo": "Try an interactive example",
        "Presiona el botón para leer un objeto JSON y mostrar los datos del equipo.": "Press the button to read a JSON object and display the team data.",
        "Mostrar datos del equipo": "Show team data",
        "Aquí aparecerá la información del equipo.": "Team information will appear here.",
        "JSON y JavaScript": "JSON and JavaScript",
        "JavaScript puede convertir un texto JSON en un objeto mediante": "JavaScript can convert JSON text into an object with",
        "y convertir un objeto en texto JSON mediante": "and convert an object to JSON text with",
        "CONCEPTOS CLAVE": "KEY CONCEPTS",
        "Estructura de JSON": "JSON structure",
        "Objeto": "Object",
        "Agrupa pares de clave y valor.": "Groups key-value pairs.",
        "Arreglo": "Array",
        "Contiene una lista ordenada.": "Contains an ordered list.",
        "Claves": "Keys",
        "Se escriben entre comillas dobles.": "Written inside double quotes.",
        "JSON no permite comentarios y requiere comillas dobles para las claves y los textos.": "JSON does not allow comments and requires double quotes around keys and strings.",
        "Siguiente: Hosting →": "Next: Hosting →",
        "04 / PUBLICACIÓN WEB": "04 / WEB PUBLISHING",
        "INTERNET": "THE INTERNET",
        "Conoce el alojamiento web, los dominios y los pasos necesarios para que FUTBOLMANÍA pueda estar disponible en internet.": "Learn about web hosting, domains, and the steps to put FUTBOLMANÍA online.",
        "INVESTIGACIÓN": "RESEARCH",
        "MUNDO?": "WORLD?",
        "Una página web necesita archivos, un lugar donde alojarlos y una dirección para que las personas puedan visitarla fácilmente.": "A website needs files, a place to host them, and an address people can easily visit.",
        "01 / ALOJAMIENTO": "01 / HOSTING",
        "Es un servicio que almacena los archivos de una página web y los entrega a los visitantes a través de internet.": "A service that stores a website's files and delivers them to visitors over the internet.",
        "Guarda archivos HTML, CSS, JavaScript e imágenes.": "Stores HTML, CSS, JavaScript, and image files.",
        "Permite acceder al sitio desde otros dispositivos.": "Makes the site available from other devices.",
        "Puede ofrecer certificados SSL, estadísticas y otras herramientas.": "May include SSL certificates, analytics, and other tools.",
        "02 / DIRECCIÓN": "02 / ADDRESS",
        "Nombre de dominio": "Domain name",
        "Es la dirección fácil de recordar que las personas escriben en el navegador para encontrar una página web.": "An easy-to-remember address people type into a browser to find a website.",
        "Ejemplo: futbolmania.com": "Example: futbolmania.com",
        "Debe registrarse si está disponible.": "It must be registered if available.",
        "Se conecta al servicio de alojamiento mediante la configuración DNS.": "It connects to the hosting service through DNS settings.",
        "03 / PUBLICACIÓN": "03 / PUBLISHING",
        "Despliegue web": "Web deployment",
        "Consiste en publicar los archivos del proyecto en una plataforma de alojamiento para que el público pueda visitar el sitio.": "Publishing project files on a hosting platform so people can visit the site.",
        "Subir o conectar el proyecto.": "Upload or connect the project.",
        "Configurar la carpeta y los archivos necesarios.": "Set up the required folder and files.",
        "Probar los enlaces, imágenes y funciones.": "Test links, images, and features.",
        "¿Qué es Vercel?": "What is Vercel?",
        "Vercel es una plataforma de despliegue web que permite publicar proyectos y obtener una dirección web para compartirlos. Puede conectarse con repositorios de código para facilitar las actualizaciones.": "Vercel is a web deployment platform for publishing projects and getting a shareable web address. It can connect to code repositories to make updates easier.",
        "Pasos para publicar FUTBOLMANÍA": "Steps to publish FUTBOLMANÍA",
        "Organiza los archivos HTML, CSS y JavaScript en una carpeta.": "Organize the HTML, CSS, and JavaScript files in a folder.",
        "Prueba todas las páginas desde tu navegador.": "Test every page in your browser.",
        "Sube el proyecto a un repositorio Git o utiliza un método de despliegue compatible.": "Upload the project to a Git repository or use a compatible deployment method.",
        "Importa el proyecto en Vercel y configura el despliegue.": "Import the project into Vercel and configure deployment.",
        "Abre la dirección publicada y comprueba que todo funcione.": "Open the published address and check that everything works.",
        "¿Qué dominio elegir?": "Which domain should you choose?",
        "El nombre debe ser breve, fácil de escribir y relacionado con el proyecto. Antes de comprarlo, comprueba si está disponible y revisa su precio de renovación.": "Choose a short name that is easy to type and fits the project. Before buying, check availability and the renewal price.",
        "Un dominio personalizado no siempre es necesario: algunas plataformas de alojamiento ofrecen una dirección gratuita para comenzar.": "A custom domain is not always necessary: some hosting platforms provide a free address to get started.",
        "Antes de publicar": "Before publishing",
        "Todos los archivos están guardados.": "All files are saved.",
        "Los enlaces de navegación funcionan.": "Navigation links work.",
        "Las imágenes se muestran correctamente.": "Images display correctly.",
        "El sitio se adapta al móvil.": "The site works on mobile.",
        "El formulario y el cuestionario se prueban.": "The form and quiz have been tested.",
        "Comprobar lo aprendido →": "Check what you learned →",
        "Demuestra cuánto aprendiste sobre desarrollo web.": "Test what you have learned about web development.",
        "1. ¿Para qué sirve JavaScript?": "1. What is JavaScript used for?",
        "Crear la estructura de una página": "Creating a page's structure",
        "Agregar interactividad": "Adding interactivity",
        "Guardar imágenes": "Saving images",
        "3. ¿Qué es jQuery?": "3. What is jQuery?",
        "Un navegador": "A browser",
        "Una librería de JavaScript": "A JavaScript library",
        "Un dominio": "A domain",
        "4. ¿Qué significa JSON?": "4. What does JSON stand for?",
        "Java System Online Network": "Java System Online Network",
        "Java Server Object Name": "Java Server Object Name",
        "5. ¿Qué es un Web Hosting?": "5. What is web hosting?",
        "Un programa para editar fotos": "A photo-editing program",
        "Un servicio que almacena un sitio web": "A service that stores a website",
        "Un lenguaje de programación": "A programming language",
        "6. ¿Para qué sirve Vercel?": "6. What is Vercel used for?",
        "Publicar proyectos web": "Publishing web projects",
        "Crear videojuegos físicos": "Creating physical video games",
        "Editar fotografías": "Editing photos",
        "7. ¿Qué es un dominio?": "7. What is a domain?",
        "El nombre de un sitio web": "A website's name",
        "Una imagen": "An image",
        "Una base de datos": "A database",
        "8. ¿Qué hace el DNS?": "8. What does DNS do?",
        "Cambia el diseño": "It changes the design",
        "Relaciona un dominio con una dirección de servidor": "It links a domain to a server address",
        "Crea videos": "It creates videos",
        "⚽ VER RESULTADO": "⚽ SHOW RESULTS",
        "QUIZ FUTBOLMANÍA": "FUTBOLMANÍA QUIZ"
    };
    const traduccionesInversas = Object.fromEntries(
        Object.entries(traducciones).map(function (entrada) {
            return [entrada[1], entrada[0]];
        })
    );
    const textosOriginales = new WeakMap();
    const tituloOriginal = document.title;
    const titulosEn = {
        "Inicio | FUTBOLMANÍA": "Home | FUTBOLMANÍA",
        "JavaScript | FUTBOLMANÍA": "JavaScript | FUTBOLMANÍA",
        "jQuery | FUTBOLMANÍA": "jQuery | FUTBOLMANÍA",
        "JSON | FUTBOLMANÍA": "JSON | FUTBOLMANÍA",
        "Hosting y dominios | FUTBOLMANÍA": "Hosting and domains | FUTBOLMANÍA",
        "FutbolManía | Quiz": "FUTBOLMANÍA | Quiz"
    };

    function cambiarIdioma(idioma) {
        document.documentElement.lang = idioma;

        document.querySelectorAll("[data-es][data-en]").forEach(function (elemento) {
            elemento.innerHTML = elemento.getAttribute(
                idioma === "en" ? "data-en" : "data-es"
            );
        });

        const caminante = document.createTreeWalker(
            body,
            NodeFilter.SHOW_TEXT
        );

        while (caminante.nextNode()) {
            const nodo = caminante.currentNode;
            const padre = nodo.parentElement;

            if (!padre || padre.closest("script, style, code, pre, [data-es]")) {
                continue;
            }

            const textoOriginal = textosOriginales.get(nodo) || nodo.nodeValue.trim();

            if (!textosOriginales.has(nodo)) {
                textosOriginales.set(nodo, textoOriginal);
            }

            const textoTraducido = idioma === "en"
                ? traducciones[textoOriginal]
                : textoOriginal;

            if (textoTraducido) {
                const espaciosIniciales = nodo.nodeValue.match(/^\s*/)[0];
                const espaciosFinales = nodo.nodeValue.match(/\s*$/)[0];
                nodo.nodeValue = espaciosIniciales + textoTraducido + espaciosFinales;
            }
        }

        document.title = idioma === "en"
            ? (titulosEn[tituloOriginal] || tituloOriginal)
            : tituloOriginal;

        document.querySelectorAll("[aria-label]").forEach(function (elemento) {
            const etiqueta = elemento.getAttribute("aria-label");
            if (etiqueta === "Cambiar idioma" || etiqueta === "Change language") {
                elemento.setAttribute("aria-label", idioma === "es" ? "Cambiar a inglés" : "Switch to Spanish");
            } else if (etiqueta === "Cambiar tema" || etiqueta === "Change theme") {
                elemento.setAttribute("aria-label", idioma === "es" ? "Cambiar tema" : "Change theme");
            } else if (etiqueta === "Abrir menú" || etiqueta === "Open menu" || etiqueta === "Cerrar menú" || etiqueta === "Close menu") {
                const menuAbierto = elemento.getAttribute("aria-expanded") === "true";
                elemento.setAttribute("aria-label", idioma === "en"
                    ? (menuAbierto ? "Close menu" : "Open menu")
                    : (menuAbierto ? "Cerrar menú" : "Abrir menú"));
            } else if (etiqueta.startsWith("Ir a la diapositiva ") || etiqueta.startsWith("Go to slide ")) {
                const numeroDiapositiva = etiqueta.match(/\d+$/)[0];
                elemento.setAttribute("aria-label", idioma === "en"
                    ? "Go to slide " + numeroDiapositiva
                    : "Ir a la diapositiva " + numeroDiapositiva);
            } else if (traducciones[etiqueta] || traduccionesInversas[etiqueta]) {
                elemento.setAttribute("aria-label", idioma === "en"
                    ? (traducciones[etiqueta] || etiqueta)
                    : (traduccionesInversas[etiqueta] || etiqueta));
            }
        });

        document.querySelectorAll("[aria-roledescription]").forEach(function (elemento) {
            const descripcion = elemento.getAttribute("aria-roledescription");
            elemento.setAttribute("aria-roledescription", idioma === "en"
                ? (traducciones[descripcion] || descripcion)
                : (descripcion === "carousel" ? "carrusel" : descripcion === "slide" ? "diapositiva" : descripcion));
        });

        actualizarTema();

        localStorage.setItem("idiomaFutbolmania", idioma);
        document.dispatchEvent(new CustomEvent("futbolmania:languagechange", {
            detail: { language: idioma }
        }));

        if (languageBtn) {
            languageBtn.textContent = idioma === "es" ? "EN" : "ES";
            languageBtn.setAttribute("aria-pressed", String(idioma === "en"));
            languageBtn.setAttribute("aria-label", idioma === "es" ? "Cambiar a inglés" : "Switch to Spanish");
        }
    }

    let idiomaGuardado = localStorage.getItem("idiomaFutbolmania") || "es";

    cambiarIdioma(idiomaGuardado);

    if (languageBtn) {
        languageBtn.addEventListener("click", function () {
            const idiomaActual =
                document.documentElement.lang === "es" ? "en" : "es";

            cambiarIdioma(idiomaActual);
        });
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            const menuAbierto = mainNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(menuAbierto));
            menuToggle.setAttribute(
                "aria-label",
                menuAbierto ? "Cerrar menú" : "Abrir menú"
            );
        });
    }

    const carousel = document.querySelector("[data-carousel]");

    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
        const dots = Array.from(carousel.querySelectorAll("[data-carousel-go]"));
        const count = carousel.querySelector("[data-carousel-count]");
        const previousButton = carousel.querySelector("[data-carousel-prev]");
        const nextButton = carousel.querySelector("[data-carousel-next]");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let activeIndex = 0;
        let autoplayTimer;

        function showSlide(index) {
            activeIndex = (index + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                const isActive = slideIndex === activeIndex;
                slide.classList.toggle("is-active", isActive);
                slide.setAttribute("aria-hidden", String(!isActive));
                slide.setAttribute("aria-label", (slideIndex + 1) + (document.documentElement.lang === "en" ? " of " : " de ") + slides.length);
                slide.inert = !isActive;
            });

            dots.forEach(function (dot, dotIndex) {
                const isActive = dotIndex === activeIndex;
                dot.classList.toggle("is-active", isActive);
                dot.setAttribute("aria-pressed", String(isActive));
            });

            if (count) {
                count.textContent = String(activeIndex + 1).padStart(2, "0")
                    + " / " + String(slides.length).padStart(2, "0");
            }
        }

        function stopAutoplay() {
            window.clearInterval(autoplayTimer);
        }

        function startAutoplay() {
            stopAutoplay();

            if (!reducedMotion.matches && !document.hidden) {
                autoplayTimer = window.setInterval(function () {
                    showSlide(activeIndex + 1);
                }, 7000);
            }
        }

        if (previousButton) {
            previousButton.addEventListener("click", function () {
                showSlide(activeIndex - 1);
                startAutoplay();
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", function () {
                showSlide(activeIndex + 1);
                startAutoplay();
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                showSlide(dotIndex);
                startAutoplay();
            });
        });

        carousel.addEventListener("mouseenter", stopAutoplay);
        carousel.addEventListener("mouseleave", startAutoplay);
        carousel.addEventListener("focusin", stopAutoplay);
        carousel.addEventListener("focusout", function (event) {
            if (!carousel.contains(event.relatedTarget)) {
                startAutoplay();
            }
        });
        document.addEventListener("visibilitychange", startAutoplay);
        reducedMotion.addEventListener("change", startAutoplay);

        showSlide(0);
        startAutoplay();
    }

    const productTrack = document.querySelector("[data-product-track]");

    if (productTrack) {
        const productGallery = document.querySelector("[data-product-gallery]");
        const cartCount = document.querySelector("[data-cart-count]");
        const previousProducts = document.querySelector("[data-shop-prev]");
        const nextProducts = document.querySelector("[data-shop-next]");
        const productCards = Array.from(productTrack.querySelectorAll(".product-card"));
        let cartItems = Number(localStorage.getItem("carritoFutbolmania") || 0);

        function renderProductGallery() {
            if (!productGallery) return;

            const ingles = document.documentElement.lang === "en";
            const fragment = document.createDocumentFragment();

            productCards.forEach(function (card) {
                const image = card.querySelector("img");
                const title = card.querySelector("h3");
                const price = card.querySelector(".product-buy strong");
                const slide = document.createElement("article");
                const galleryImage = image.cloneNode();
                const caption = document.createElement("div");
                const productName = document.createElement("span");
                const productPrice = document.createElement("strong");

                slide.className = "product-gallery-slide";
                galleryImage.alt = title.getAttribute(ingles ? "data-en" : "data-es");
                caption.className = "product-gallery-caption";
                productName.textContent = title.getAttribute(ingles ? "data-en" : "data-es");
                productPrice.textContent = price.textContent;
                caption.append(productName, productPrice);
                slide.append(galleryImage, caption);
                fragment.append(slide);
            });

            productGallery.replaceChildren(fragment);
        }

        function updateCart() {
            if (cartCount) cartCount.textContent = String(cartItems);
            localStorage.setItem("carritoFutbolmania", String(cartItems));
        }

        function scrollProducts(direction) {
            const firstSlide = productGallery && productGallery.firstElementChild;
            if (!firstSlide) return;

            const gap = parseFloat(getComputedStyle(productGallery).columnGap) || 0;
            productGallery.scrollBy({
                left: direction * (firstSlide.getBoundingClientRect().width + gap),
                behavior: "smooth"
            });
        }

        if (previousProducts) {
            previousProducts.addEventListener("click", function () {
                scrollProducts(-1);
            });
        }

        if (nextProducts) {
            nextProducts.addEventListener("click", function () {
                scrollProducts(1);
            });
        }

        productTrack.querySelectorAll("[data-add-cart]").forEach(function (button) {
            button.addEventListener("click", function () {
                cartItems += 1;
                updateCart();
                button.classList.add("is-added");
                button.textContent = document.documentElement.lang === "en" ? "Added ✓" : "Agregado ✓";

                window.setTimeout(function () {
                    button.classList.remove("is-added");
                    button.textContent = document.documentElement.lang === "en" ? "Add" : "Agregar";
                }, 1200);
            });
        });

        document.addEventListener("futbolmania:languagechange", function (event) {
            productTrack.querySelectorAll("[data-add-cart]").forEach(function (button) {
                button.textContent = event.detail.language === "en" ? "Add" : "Agregar";
            });
            renderProductGallery();
        });

        renderProductGallery();
        updateCart();
    }

});

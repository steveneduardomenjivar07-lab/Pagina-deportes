/* =====================================
   MODO OSCURO / MODO CLARO
===================================== */

const themeToggle = document.getElementById("themeToggle");


/* Comprobar si existe el botón */

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        /* Cambiar clase del body */

        document.body.classList.toggle("light-mode");


        /* Cambiar texto del botón */

        if (document.body.classList.contains("light-mode")) {

            themeToggle.textContent = "🌙 Oscuro";

        } else {

            themeToggle.textContent = "☀️ Claro";

        }

    });

}


/* =====================================
   ANIMACIÓN SUAVE
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
function calificarQuiz() {

    let respuestas = {
        p1: "b",
        p2: "a",
        p3: "b",
        p4: "a",
        p5: "b",
        p6: "a",
        p7: "a",
        p8: "b"
    };

    let puntos = 0;
    let contestadas = 0;

    for (let pregunta in respuestas) {

        let seleccion = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );

        if (seleccion) {
            contestadas++;

            if (seleccion.value === respuestas[pregunta]) {
                puntos++;
            }
        }
    }

    let porcentaje = (puntos / 8) * 100;

    let mensaje = "";

    if (puntos === 8) {
        mensaje = "🏆 ¡EXCELENTE! Eres un campeón del desarrollo web.";
    } 
    else if (puntos >= 6) {
        mensaje = "⚽ ¡MUY BIEN! Tienes buenos conocimientos.";
    } 
    else if (puntos >= 4) {
        mensaje = "👍 ¡BIEN! Pero puedes seguir repasando.";
    } 
    else {
        mensaje = "📚 Sigue estudiando y vuelve a intentarlo.";
    }

    let resultado = document.getElementById("resultado");

    resultado.innerHTML =
        "⚽ RESULTADO<br><br>" +
        puntos + " / 8 respuestas correctas<br>" +
        porcentaje + "%<br><br>" +
        mensaje;

    resultado.style.display = "block";

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}
/* ================================================================
   PROYECTO: VIH JOVEN
   ARCHIVO: script.js

   DESCRIPCIÓN:
   Este archivo contiene la funcionalidad interactiva de la
   plataforma educativa VIH Joven.

   TECNOLOGÍAS:
   - HTML5  → estructura
   - CSS3   → diseño
   - JavaScript → interacción

   JUEGOS INCLUIDOS:
   1. Completa la palabra
   2. Mitos y realidades
   3. Quiz educativo
   4. Sopa de letras

   IMPORTANTE:
   Este archivo debe estar ubicado dentro de:

       js/script.js

   Y debe conectarse desde juegos.html mediante:

       <script src="js/script.js"></script>
================================================================ */


/* ================================================================
   1. ESPERAR A QUE LA PÁGINA TERMINE DE CARGAR
================================================================ */

/*
   DOMContentLoaded indica que JavaScript debe esperar hasta que
   todo el documento HTML haya sido cargado.

   Esto evita intentar utilizar elementos que todavía no existen.
*/

document.addEventListener("DOMContentLoaded", function () {


    /* ============================================================
       2. COMPROBAR QUE JAVASCRIPT ESTÁ FUNCIONANDO
    ============================================================ */

    console.log("VIH Joven - JavaScript cargado correctamente.");


    /* ============================================================
       3. IDENTIFICAR LA PÁGINA DE JUEGOS
    ============================================================ */

    /*
       Buscamos un elemento con el ID:

           juegos-app

       Este será el contenedor principal donde JavaScript
       colocará los juegos.

       Si el elemento no existe, mostramos un mensaje en consola.
    */

    const contenedorJuegos = document.getElementById("juegos-app");


    /*
       Si no estamos en juegos.html, simplemente detenemos
       la ejecución de la parte de juegos.

       Esto permite utilizar el mismo script.js en otras páginas
       del proyecto sin provocar errores.
    */

    if (!contenedorJuegos) {

        console.log("Página informativa detectada. No se cargan los juegos.");

        return;

    }


    /* ============================================================
       4. BANCO DE PALABRAS
          JUEGO: COMPLETA LA PALABRA
    ============================================================ */

    /*
       Creamos un arreglo que contiene diferentes palabras.

       Cada objeto tiene:

       palabra → respuesta correcta
       pista   → ayuda para el jugador
    */

    const bancoPalabras = [

        {
            palabra: "PREVENCION",
            pista: "Acciones que ayudan a reducir riesgos relacionados con el VIH."
        },

        {
            palabra: "INFORMACION",
            pista: "Conocer datos confiables ayuda a tomar decisiones responsables."
        },

        {
            palabra: "TRATAMIENTO",
            pista: "Permite controlar el VIH y cuidar la salud."
        },

        {
            palabra: "PRUEBA",
            pista: "Permite conocer el estado serológico."
        },

        {
            palabra: "SALUD",
            pista: "Es un derecho y un aspecto fundamental del bienestar."
        },

        {
            palabra: "DERECHOS",
            pista: "Todas las personas los tienen y deben ser respetados."
        },

        {
            palabra: "APOYO",
            pista: "Puede ayudar a una persona que necesita orientación."
        },

        {
            palabra: "RESPETO",
            pista: "Es fundamental para evitar el estigma y la discriminación."
        },

        {
            palabra: "VIH",
            pista: "Virus de la Inmunodeficiencia Humana."
        },

        {
            palabra: "EDUCACION",
            pista: "Ayuda a comprender mejor la prevención y la salud."
        }

    ];


    /* ============================================================
       5. BANCO DE MITOS Y REALIDADES
    ============================================================ */

    /*
       Cada afirmación contiene:

       texto       → afirmación que verá el jugador
       respuesta   → mito o realidad
       explicacion → información educativa
    */

    const bancoMitos = [

        {
            texto: "El VIH se transmite por abrazar a una persona.",
            respuesta: "mito",
            explicacion:
                "El VIH no se transmite mediante abrazos ni por el contacto cotidiano."
        },

        {
            texto: "Una persona con VIH puede recibir tratamiento.",
            respuesta: "realidad",
            explicacion:
                "El tratamiento antirretroviral permite controlar el VIH y es fundamental para la salud."
        },

        {
            texto: "Compartir un vaso transmite el VIH.",
            respuesta: "mito",
            explicacion:
                "El VIH no se transmite por compartir vasos, platos o cubiertos."
        },

        {
            texto: "Una prueba permite conocer el estado serológico.",
            respuesta: "realidad",
            explicacion:
                "Una prueba de VIH permite conocer el estado serológico de una persona."
        },

        {
            texto: "VIH y sida significan exactamente lo mismo.",
            respuesta: "mito",
            explicacion:
                "VIH es el virus. Sida es una etapa avanzada de la infección por VIH."
        },

        {
            texto: "La información confiable ayuda a prevenir el VIH.",
            respuesta: "realidad",
            explicacion:
                "La educación y la información confiable ayudan a tomar decisiones informadas."
        },

        {
            texto: "Se puede saber si alguien tiene VIH solamente por su apariencia.",
            respuesta: "mito",
            explicacion:
                "No es posible determinar si una persona tiene VIH observando su apariencia."
        },

        {
            texto: "Las personas con VIH merecen respeto y no discriminación.",
            respuesta: "realidad",
            explicacion:
                "Las personas con VIH tienen los mismos derechos y merecen respeto."
        },

        {
            texto: "El VIH se transmite por compartir un espacio de estudio.",
            respuesta: "mito",
            explicacion:
                "Compartir aulas, oficinas u otros espacios cotidianos no transmite el VIH."
        },

        {
            texto: "Buscar orientación en servicios de salud puede ser útil ante dudas sobre el VIH.",
            respuesta: "realidad",
            explicacion:
                "Los servicios de salud pueden brindar orientación, pruebas y atención."
        }

    ];


    /* ============================================================
       6. BANCO DE PREGUNTAS DEL QUIZ
    ============================================================ */

    /*
       Cada pregunta tiene:

       pregunta → texto
       opciones → respuestas disponibles
       correcta → posición de la respuesta correcta
       explicacion → información educativa
    */

    const bancoQuiz = [

        {
            pregunta: "¿Qué significa VIH?",

            opciones: [
                "Virus de la Inmunodeficiencia Humana",
                "Virus de Infección Hepática",
                "Vacuna de Inmunidad Humana"
            ],

            correcta: 0,

            explicacion:
                "VIH significa Virus de la Inmunodeficiencia Humana."
        },

        {
            pregunta: "¿El VIH se transmite por abrazar?",

            opciones: [
                "Sí",
                "No",
                "Siempre"
            ],

            correcta: 1,

            explicacion:
                "El VIH no se transmite mediante abrazos ni contacto cotidiano."
        },

        {
            pregunta: "¿Para qué sirve una prueba de VIH?",

            opciones: [
                "Para conocer el estado serológico",
                "Para curar inmediatamente el VIH",
                "Para saber la personalidad"
            ],

            correcta: 0,

            explicacion:
                "La prueba permite conocer el estado serológico de una persona."
        },

        {
            pregunta: "¿Qué ayuda a combatir los mitos sobre el VIH?",

            opciones: [
                "Información confiable",
                "Rumores",
                "Publicaciones sin verificar"
            ],

            correcta: 0,

            explicacion:
                "Consultar información confiable ayuda a diferenciar hechos de mitos."
        },

        {
            pregunta: "¿Las personas con VIH deben ser discriminadas?",

            opciones: [
                "Sí",
                "No",
                "Depende de la persona"
            ],

            correcta: 1,

            explicacion:
                "Las personas con VIH tienen los mismos derechos y merecen respeto."
        },

        {
            pregunta: "¿Qué significa sida?",

            opciones: [
                "Una etapa avanzada de la infección por VIH",
                "Una vacuna",
                "Una bacteria"
            ],

            correcta: 0,

            explicacion:
                "Sida se refiere a una etapa avanzada de la infección por VIH."
        },

        {
            pregunta: "¿Es importante acudir a servicios de salud ante dudas sobre el VIH?",

            opciones: [
                "Sí",
                "No",
                "Nunca"
            ],

            correcta: 0,

            explicacion:
                "Los servicios de salud pueden brindar orientación y atención."
        },

        {
            pregunta: "¿Qué ayuda a tomar mejores decisiones sobre salud?",

            opciones: [
                "Información confiable",
                "Rumores",
                "Mitos"
            ],

            correcta: 0,

            explicacion:
                "La información confiable permite tomar decisiones informadas."
        },

        {
            pregunta: "¿El VIH se transmite por compartir cubiertos?",

            opciones: [
                "Sí",
                "No",
                "Solamente algunas veces"
            ],

            correcta: 1,

            explicacion:
                "El VIH no se transmite por compartir platos, vasos o cubiertos."
        },

        {
            pregunta: "¿Qué valor debemos promover hacia las personas con VIH?",

            opciones: [
                "Respeto",
                "Discriminación",
                "Rechazo"
            ],

            correcta: 0,

            explicacion:
                "El respeto y la no discriminación son fundamentales."
        }

    ];


    /* ============================================================
       7. PALABRAS PARA LA SOPA DE LETRAS
    ============================================================ */

    /*
       Estas son las palabras que el jugador tendrá que encontrar.
    */

    const palabrasSopa = [

        "VIH",
        "SALUD",
        "APOYO",
        "PRUEBA",
        "RESPETO",
        "DERECHOS",
        "PREVENCION",
        "INFORMACION"

    ];


    /* ============================================================
       8. VARIABLES GENERALES
    ============================================================ */

    /*
       Estas variables almacenan el estado de los juegos.
    */

    let indicePalabra = 0;

    let puntosPalabra = 0;

    let indiceMito = 0;

    let puntosMito = 0;

    let indiceQuiz = 0;

    let puntosQuiz = 0;

    let respuestasQuiz = 0;

    let palabrasEncontradas = [];


    /* ============================================================
       9. FUNCIÓN PARA MEZCLAR ARREGLOS
    ============================================================ */

    /*
       Math.random() genera números aleatorios.

       Esta función permite cambiar el orden de las preguntas
       y palabras para que las partidas no sean repetitivas.
    */

    function mezclar(arreglo) {

        let copia = [...arreglo];

        for (let i = copia.length - 1; i > 0; i--) {

            let posicionAleatoria =
                Math.floor(Math.random() * (i + 1));

            let temporal = copia[i];

            copia[i] = copia[posicionAleatoria];

            copia[posicionAleatoria] = temporal;

        }

        return copia;

    }


    /* ============================================================
       10. PREPARAR LOS BANCOS DE PREGUNTAS
    ============================================================ */

    let palabrasPartida = mezclar(bancoPalabras);

    let mitosPartida = mezclar(bancoMitos);

    let quizPartida = mezclar(bancoQuiz);


    /* ============================================================
       11. CREAR LA INTERFAZ PRINCIPAL DE LOS JUEGOS
    ============================================================ */

    /*
       innerHTML permite insertar contenido HTML
       directamente desde JavaScript.

       Aquí construimos la interfaz de la zona de juegos.
    */

    contenedorJuegos.innerHTML = `

        <div class="juegos-app-contenido">

            <div class="juegos-titulo">

                <span class="etiqueta-neon">
                    ZONA INTERACTIVA
                </span>

                <h1>
                    Aprende jugando 🎮
                </h1>

                <p>
                    Pon a prueba lo que sabes sobre el VIH
                    mientras aprendes nueva información.
                </p>

            </div>


            <div class="selector-juegos">

                <button
                    class="juego-selector activo"
                    data-juego="palabra">

                    🔤 Completa la palabra

                </button>


                <button
                    class="juego-selector"
                    data-juego="mitos">

                    🧠 Mitos y realidades

                </button>


                <button
                    class="juego-selector"
                    data-juego="quiz">

                    ❓ Quiz

                </button>


                <button
                    class="juego-selector"
                    data-juego="sopa">

                    🔎 Sopa de letras

                </button>

            </div>


            <div
                id="juego-palabra"
                class="juego-panel activo">
            </div>


            <div
                id="juego-mitos"
                class="juego-panel">
            </div>


            <div
                id="juego-quiz"
                class="juego-panel">
            </div>


            <div
                id="juego-sopa"
                class="juego-panel">
            </div>

        </div>

    `;


    /* ============================================================
       12. CAMBIAR ENTRE JUEGOS
    ============================================================ */

    /*
       Seleccionamos todos los botones que permiten
       cambiar de actividad.
    */

    const botonesSelector =
        document.querySelectorAll(".juego-selector");


    /*
       Recorremos todos los botones.
    */

    botonesSelector.forEach(function (boton) {

        boton.addEventListener("click", function () {

            /*
               Obtenemos el nombre del juego almacenado
               en data-juego.
            */

            const juegoSeleccionado =
                boton.dataset.juego;


            /*
               Quitamos la clase activo de todos los botones.
            */

            botonesSelector.forEach(function (otroBoton) {

                otroBoton.classList.remove("activo");

            });


            /*
               Activamos el botón seleccionado.
            */

            boton.classList.add("activo");


            /*
               Ocultamos todos los paneles.
            */

            const paneles =
                document.querySelectorAll(".juego-panel");


            paneles.forEach(function (panel) {

                panel.classList.remove("activo");

            });


            /*
               Mostramos solamente el juego seleccionado.
            */

            const panel =
                document.getElementById(
                    "juego-" + juegoSeleccionado
                );


            if (panel) {

                panel.classList.add("activo");

            }

        });

    });


    /* ============================================================
       13. JUEGO 1: COMPLETA LA PALABRA
    ============================================================ */

    function mostrarPalabra() {

        const panel =
            document.getElementById("juego-palabra");


        const elemento =
            palabrasPartida[indicePalabra];


        /*
           Si ya terminamos todas las palabras,
           mostramos el resultado final.
        */

        if (!elemento) {

            panel.innerHTML = `

                <div class="resultado-final">

                    <div class="resultado-icono">
                        🏆
                    </div>

                    <h2>
                        ¡Juego terminado!
                    </h2>

                    <p>
                        Tu puntuación fue:
                    </p>

                    <strong>
                        ${puntosPalabra} puntos
                    </strong>

                    <button
                        id="reiniciar-palabra"
                        class="boton-juego">

                        🔄 Jugar nuevamente

                    </button>

                </div>

            `;


            document
                .getElementById("reiniciar-palabra")
                .addEventListener("click", reiniciarPalabra);


            return;

        }


        /*
           Generamos una palabra parcialmente oculta.
        */

        const palabra =
            elemento.palabra;


        let letras =
            palabra.split("");


        /*
           Determinamos cuántas letras vamos a ocultar.
        */

        for (let i = 0; i < letras.length; i++) {

            if (Math.random() < 0.45) {

                letras[i] = "_";

            }

        }


        /*
           Evitamos que la palabra quede completamente visible.
        */

        if (letras.join("") === palabra) {

            letras[0] = "_";

        }


        const palabraOculta =
            letras.join(" ");


        panel.innerHTML = `

            <div class="juego-cabecera">

                <span class="juego-numero">
                    ${indicePalabra + 1} / ${palabrasPartida.length}
                </span>

                <span class="juego-puntos">
                    ⭐ ${puntosPalabra} puntos
                </span>

            </div>


            <div class="juego-contenido">

                <span class="juego-icono-grande">
                    🔤
                </span>

                <h2>
                    Completa la palabra
                </h2>

                <p>
                    ${elemento.pista}
                </p>


                <div class="palabra-oculta">
                    ${palabraOculta}
                </div>


                <input
                    type="text"
                    id="respuesta-palabra"
                    class="respuesta-juego"
                    placeholder="Escribe la palabra"
                    autocomplete="off"
                >


                <button
                    id="comprobar-palabra"
                    class="boton-juego">

                    Comprobar respuesta ✓

                </button>


                <div
                    id="resultado-palabra"
                    class="resultado-mensaje">
                </div>

            </div>

        `;


        const input =
            document.getElementById("respuesta-palabra");


        const boton =
            document.getElementById("comprobar-palabra");


        const resultado =
            document.getElementById("resultado-palabra");


        /*
           Evento click del botón.
        */

        boton.addEventListener("click", function () {

            comprobarPalabra(
                input,
                resultado,
                elemento.palabra
            );

        });


        /*
           También permitimos utilizar ENTER.
        */

        input.addEventListener("keydown", function (evento) {

            if (evento.key === "Enter") {

                comprobarPalabra(
                    input,
                    resultado,
                    elemento.palabra
                );

            }

        });


        /*
           Colocamos automáticamente el cursor
           dentro del campo.
        */

        input.focus();

    }


    /* ============================================================
       14. COMPROBAR COMPLETA LA PALABRA
    ============================================================ */

    function comprobarPalabra(
        input,
        resultado,
        respuestaCorrecta
    ) {

        /*
           Convertimos la respuesta a mayúsculas
           para evitar problemas con mayúsculas/minúsculas.
        */

        const respuesta =
            input.value
                .trim()
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");


        const correcta =
            respuestaCorrecta
                .toUpperCase();


        if (respuesta === correcta) {

            puntosPalabra += 10;


            resultado.innerHTML = `

                <div class="respuesta-correcta">

                    ✅ ¡Correcto!

                    <p>
                        Muy bien. Has identificado
                        correctamente el concepto.
                    </p>

                    <button
                        id="siguiente-palabra"
                        class="boton-juego">

                        Siguiente →

                    </button>

                </div>

            `;


            document
                .getElementById("siguiente-palabra")
                .addEventListener("click", function () {

                    indicePalabra++;

                    mostrarPalabra();

                });


        } else {

            resultado.innerHTML = `

                <div class="respuesta-incorrecta">

                    ❌ Aún no.

                    <p>
                        Revisa la respuesta e inténtalo
                        nuevamente.
                    </p>

                </div>

            `;

        }

    }


    /* ============================================================
       15. REINICIAR COMPLETA LA PALABRA
    ============================================================ */

    function reiniciarPalabra() {

        indicePalabra = 0;

        puntosPalabra = 0;

        palabrasPartida =
            mezclar(bancoPalabras);

        mostrarPalabra();

    }


    /* ============================================================
       16. JUEGO 2: MITOS Y REALIDADES
    ============================================================ */

    function mostrarMito() {

        const panel =
            document.getElementById("juego-mitos");


        const elemento =
            mitosPartida[indiceMito];


        if (!elemento) {

            panel.innerHTML = `

                <div class="resultado-final">

                    <div class="resultado-icono">
                        🏆
                    </div>

                    <h2>
                        ¡Terminaste los mitos!
                    </h2>

                    <p>
                        Tu puntuación:
                    </p>

                    <strong>
                        ${puntosMito} puntos
                    </strong>

                    <button
                        id="reiniciar-mitos"
                        class="boton-juego">

                        🔄 Jugar nuevamente

                    </button>

                </div>

            `;


            document
                .getElementById("reiniciar-mitos")
                .addEventListener(
                    "click",
                    reiniciarMitos
                );


            return;

        }


        panel.innerHTML = `

            <div class="juego-cabecera">

                <span>
                    ${indiceMito + 1} / ${mitosPartida.length}
                </span>

                <span>
                    ⭐ ${puntosMito} puntos
                </span>

            </div>


            <div class="juego-contenido">

                <span class="juego-icono-grande">
                    🧠
                </span>

                <h2>
                    ¿Mito o realidad?
                </h2>


                <div class="afirmacion">

                    <p>
                        ${elemento.texto}
                    </p>

                </div>


                <div class="opciones-mito">

                    <button
                        class="boton-mito"
                        data-respuesta="mito">

                        ❌ MITO

                    </button>


                    <button
                        class="boton-mito"
                        data-respuesta="realidad">

                        ✅ REALIDAD

                    </button>

                </div>


                <div
                    id="resultado-mito"
                    class="resultado-mensaje">
                </div>

            </div>

        `;


        const botones =
            document.querySelectorAll(".boton-mito");


        botones.forEach(function (boton) {

            boton.addEventListener("click", function () {

                comprobarMito(
                    boton.dataset.respuesta,
                    elemento
                );

            });

        });

    }


    /* ============================================================
       17. COMPROBAR MITO O REALIDAD
    ============================================================ */

    function comprobarMito(
        respuestaUsuario,
        elemento
    ) {

        const resultado =
            document.getElementById("resultado-mito");


        const botones =
            document.querySelectorAll(".boton-mito");


        /*
           Desactivamos los botones para evitar
           responder varias veces la misma pregunta.
        */

        botones.forEach(function (boton) {

            boton.disabled = true;

        });


        if (respuestaUsuario === elemento.respuesta) {

            puntosMito += 10;


            resultado.innerHTML = `

                <div class="respuesta-correcta">

                    🎉 ¡Correcto!

                    <p>
                        ${elemento.explicacion}
                    </p>

                    <button
                        id="siguiente-mito"
                        class="boton-juego">

                        Siguiente →

                    </button>

                </div>

            `;

        } else {

            resultado.innerHTML = `

                <div class="respuesta-incorrecta">

                    💡 No exactamente.

                    <p>
                        La respuesta correcta es:
                        <strong>
                            ${elemento.respuesta.toUpperCase()}
                        </strong>
                    </p>

                    <p>
                        ${elemento.explicacion}
                    </p>

                    <button
                        id="siguiente-mito"
                        class="boton-juego">

                        Siguiente →

                    </button>

                </div>

            `;

        }


        document
            .getElementById("siguiente-mito")
            .addEventListener("click", function () {

                indiceMito++;

                mostrarMito();

            });

    }


    /* ============================================================
       18. REINICIAR MITOS
    ============================================================ */

    function reiniciarMitos() {

        indiceMito = 0;

        puntosMito = 0;

        mitosPartida =
            mezclar(bancoMitos);

        mostrarMito();

    }


    /* ============================================================
       19. JUEGO 3: QUIZ
    ============================================================ */

    function mostrarQuiz() {

        const panel =
            document.getElementById("juego-quiz");


        const pregunta =
            quizPartida[indiceQuiz];


        if (!pregunta) {

            mostrarResultadoQuiz();

            return;

        }


        panel.innerHTML = `

            <div class="juego-cabecera">

                <span>
                    Pregunta ${indiceQuiz + 1}
                    de ${quizPartida.length}
                </span>

                <span>
                    ⭐ ${puntosQuiz} puntos
                </span>

            </div>


            <div class="juego-contenido">

                <span class="juego-icono-grande">
                    ❓
                </span>

                <h2>
                    Quiz VIH Joven
                </h2>


                <div class="pregunta-quiz">

                    <h3>
                        ${pregunta.pregunta}
                    </h3>

                </div>


                <div class="opciones-quiz">

                    ${pregunta.opciones
                        .map(function (opcion, indice) {

                            return `

                                <button
                                    class="opcion-quiz"
                                    data-indice="${indice}">

                                    ${opcion}

                                </button>

                            `;

                        })
                        .join("")}

                </div>


                <div
                    id="resultado-quiz"
                    class="resultado-mensaje">
                </div>

            </div>

        `;


        const opciones =
            document.querySelectorAll(".opcion-quiz");


        opciones.forEach(function (opcion) {

            opcion.addEventListener("click", function () {

                comprobarQuiz(
                    Number(opcion.dataset.indice),
                    pregunta,
                    opciones
                );

            });

        });

    }


    /* ============================================================
       20. COMPROBAR QUIZ
    ============================================================ */

    function comprobarQuiz(
        respuestaUsuario,
        pregunta,
        opciones
    ) {

        const resultado =
            document.getElementById("resultado-quiz");


        /*
           Evitamos que el usuario pueda seleccionar
           otra opción después de responder.
        */

        opciones.forEach(function (opcion) {

            opcion.disabled = true;

        });


        respuestasQuiz++;


        if (respuestaUsuario === pregunta.correcta) {

            puntosQuiz += 10;


            resultado.innerHTML = `

                <div class="respuesta-correcta">

                    🎉 ¡Respuesta correcta!

                    <p>
                        ${pregunta.explicacion}
                    </p>

                    <button
                        id="siguiente-quiz"
                        class="boton-juego">

                        Siguiente →

                    </button>

                </div>

            `;

        } else {

            resultado.innerHTML = `

                <div class="respuesta-incorrecta">

                    ❌ Respuesta incorrecta.

                    <p>
                        ${pregunta.explicacion}
                    </p>

                    <button
                        id="siguiente-quiz"
                        class="boton-juego">

                        Siguiente →

                    </button>

                </div>

            `;

        }


        document
            .getElementById("siguiente-quiz")
            .addEventListener("click", function () {

                indiceQuiz++;

                mostrarQuiz();

            });

    }


    /* ============================================================
       21. RESULTADO FINAL DEL QUIZ
    ============================================================ */

    function mostrarResultadoQuiz() {

        const panel =
            document.getElementById("juego-quiz");


        let mensaje;


        /*
           Dependiendo de la puntuación mostramos
           un mensaje diferente.
        */

        if (puntosQuiz >= 80) {

            mensaje =
                "¡Excelente! Tienes muy buenos conocimientos.";

        } else if (puntosQuiz >= 50) {

            mensaje =
                "¡Muy bien! Sigue aprendiendo y verificando información.";

        } else {

            mensaje =
                "Buen intento. Explora nuevamente la plataforma para aprender más.";

        }


        panel.innerHTML = `

            <div class="resultado-final">

                <div class="resultado-icono">
                    🏆
                </div>

                <h2>
                    Quiz terminado
                </h2>

                <p>
                    ${mensaje}
                </p>

                <div class="resultado-puntuacion">

                    ${puntosQuiz}
                    / ${quizPartida.length * 10}

                </div>


                <button
                    id="reiniciar-quiz"
                    class="boton-juego">

                    🔄 Intentar nuevamente

                </button>

            </div>

        `;


        document
            .getElementById("reiniciar-quiz")
            .addEventListener(
                "click",
                reiniciarQuiz
            );

    }


    /* ============================================================
       22. REINICIAR QUIZ
    ============================================================ */

    function reiniciarQuiz() {

        indiceQuiz = 0;

        puntosQuiz = 0;

        respuestasQuiz = 0;

        quizPartida =
            mezclar(bancoQuiz);

        mostrarQuiz();

    }


    /* ============================================================
       23. JUEGO 4: SOPA DE LETRAS
    ============================================================ */

    /*
       Para mantener el juego sencillo y apropiado
       para nuestra primera versión, utilizaremos una
       cuadrícula generada mediante JavaScript.

       Las palabras aparecerán horizontalmente.
    */


    const tamañoSopa = 12;


    /* ============================================================
       24. CREAR CUADRÍCULA VACÍA
    ============================================================ */

    function crearCuadricula() {

        let cuadricula = [];


        for (let fila = 0; fila < tamañoSopa; fila++) {

            cuadricula[fila] = [];


            for (
                let columna = 0;
                columna < tamañoSopa;
                columna++
            ) {

                cuadricula[fila][columna] = "";

            }

        }


        return cuadricula;

    }


    /* ============================================================
       25. COLOCAR PALABRAS EN LA SOPA
    ============================================================ */

    function colocarPalabras(cuadricula) {

        /*
           Tomamos una copia de las palabras
           y mezclamos su orden.
        */

        const palabras =
            mezclar(palabrasSopa);


        /*
           Colocaremos solamente algunas palabras
           para mantener la sopa sencilla.
        */

        const seleccion =
            palabras.slice(0, 6);


        seleccion.forEach(function (palabra) {

            let fila =
                Math.floor(
                    Math.random() * tamañoSopa
                );


            let columna =
                Math.floor(
                    Math.random() *
                    (tamañoSopa - palabra.length)
                );


            /*
               Colocamos cada letra horizontalmente.
            */

            for (
                let i = 0;
                i < palabra.length;
                i++
            ) {

                cuadricula[fila][columna + i] =
                    palabra[i];

            }

        });


        /*
           Guardamos las palabras que realmente
           participan en esta partida.
        */

        return seleccion;

    }


    /* ============================================================
       26. RELLENAR ESPACIOS VACÍOS
    ============================================================ */

    function rellenarCuadricula(cuadricula) {

        const letras =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        for (let fila = 0; fila < tamañoSopa; fila++) {

            for (
                let columna = 0;
                columna < tamañoSopa;
                columna++
            ) {

                if (
                    cuadricula[fila][columna] === ""
                ) {

                    let posicion =
                        Math.floor(
                            Math.random() *
                            letras.length
                        );


                    cuadricula[fila][columna] =
                        letras[posicion];

                }

            }

        }

    }


    /* ============================================================
       27. MOSTRAR SOPA DE LETRAS
    ============================================================ */

    function mostrarSopa() {

        const panel =
            document.getElementById("juego-sopa");


        const cuadricula =
            crearCuadricula();


        const palabrasPartidaSopa =
            colocarPalabras(cuadricula);


        rellenarCuadricula(cuadricula);


        palabrasEncontradas = [];


        let htmlCuadricula = "";


        for (let fila = 0; fila < tamañoSopa; fila++) {

            for (
                let columna = 0;
                columna < tamañoSopa;
                columna++
            ) {

                htmlCuadricula += `

                    <button
                        class="celda-sopa"
                        data-fila="${fila}"
                        data-columna="${columna}">

                        ${cuadricula[fila][columna]}

                    </button>

                `;

            }

        }


        panel.innerHTML = `

            <div class="juego-cabecera">

                <span>
                    🔎 Sopa de letras
                </span>

                <span id="contador-sopa">
                    0 encontradas
                </span>

            </div>


            <div class="juego-contenido">

                <span class="juego-icono-grande">
                    🔎
                </span>

                <h2>
                    Encuentra las palabras
                </h2>

                <p>
                    Busca las palabras relacionadas
                    con el VIH, la salud y los derechos.
                </p>


                <div class="lista-palabras-sopa">

                    ${palabrasPartidaSopa
                        .map(function (palabra) {

                            return `

                                <span
                                    class="palabra-sopa"
                                    data-palabra="${palabra}">

                                    ${palabra}

                                </span>

                            `;

                        })
                        .join("")}

                </div>


                <div class="sopa-grid">

                    ${htmlCuadricula}

                </div>


                <div
                    id="resultado-sopa"
                    class="resultado-mensaje">
                </div>


                <button
                    id="reiniciar-sopa"
                    class="boton-juego">

                    🔄 Nueva sopa

                </button>

            </div>

        `;


        /*
           Seleccionamos todas las celdas.
        */

        const celdas =
            document.querySelectorAll(".celda-sopa");


        celdas.forEach(function (celda) {

            celda.addEventListener(
                "click",
                function () {

                    seleccionarCelda(
                        celda,
                        palabrasPartidaSopa
                    );

                }
            );

        });


        document
            .getElementById("reiniciar-sopa")
            .addEventListener(
                "click",
                mostrarSopa
            );

    }


    /* ============================================================
       28. SELECCIONAR CELDA DE LA SOPA
    ============================================================ */

    function seleccionarCelda(
        celda,
        palabrasPartidaSopa
    ) {

        /*
           Marcamos visualmente la celda.
        */

        celda.classList.toggle("seleccionada");


        /*
           Después de seleccionar una letra,
           comprobamos las posibles palabras.
        */

        comprobarPalabrasSopa(
            palabrasPartidaSopa
        );

    }


    /* ============================================================
       29. COMPROBAR PALABRAS DE LA SOPA
    ============================================================ */

    function comprobarPalabrasSopa(
        palabrasPartidaSopa
    ) {

        /*
           Para esta primera versión sencilla,
           el usuario puede seleccionar las letras
           de una palabra.

           Recorremos las palabras y comprobamos
           si las letras seleccionadas forman
           alguna palabra.
        */

        const celdasSeleccionadas =
            document.querySelectorAll(
                ".celda-sopa.seleccionada"
            );


        /*
           Si todavía no se seleccionó ninguna celda,
           terminamos la función.
        */

        if (celdasSeleccionadas.length === 0) {

            return;

        }


        let textoSeleccionado = "";


        celdasSeleccionadas.forEach(
            function (celda) {

                textoSeleccionado +=
                    celda.textContent.trim();

            }
        );


        /*
           Comprobamos si la secuencia seleccionada
           coincide con alguna palabra.
        */

        palabrasPartidaSopa.forEach(
            function (palabra) {

                if (
                    textoSeleccionado === palabra &&
                    !palabrasEncontradas.includes(palabra)
                ) {

                    palabrasEncontradas.push(palabra);


                    /*
                       Marcamos la palabra como encontrada.
                    */

                    const elementoPalabra =
                        document.querySelector(
                            `[data-palabra="${palabra}"]`
                        );


                    if (elementoPalabra) {

                        elementoPalabra.classList.add(
                            "encontrada"
                        );

                    }


                    /*
                       Mostramos mensaje.
                    */

                    const resultado =
                        document.getElementById(
                            "resultado-sopa"
                        );


                    resultado.innerHTML = `

                        <div class="respuesta-correcta">

                            🎉 ¡Encontraste:
                            ${palabra}!

                        </div>

                    `;


                    /*
                       Limpiamos la selección.
                    */

                    celdasSeleccionadas.forEach(
                        function (celda) {

                            celda.classList.remove(
                                "seleccionada"
                            );

                            celda.classList.add(
                                "encontrada"
                            );

                        }
                    );


                    actualizarContadorSopa(
                        palabrasPartidaSopa
                    );

                }

            }
        );

    }


    /* ============================================================
       30. ACTUALIZAR CONTADOR DE SOPA
    ============================================================ */

    function actualizarContadorSopa(
        palabrasPartidaSopa
    ) {

        const contador =
            document.getElementById(
                "contador-sopa"
            );


        contador.textContent =
            palabrasEncontradas.length +
            " / " +
            palabrasPartidaSopa.length +
            " encontradas";


        /*
           Cuando se encuentran todas las palabras,
           mostramos un mensaje final.
        */

        if (
            palabrasEncontradas.length ===
            palabrasPartidaSopa.length
        ) {

            const resultado =
                document.getElementById(
                    "resultado-sopa"
                );


            resultado.innerHTML = `

                <div class="respuesta-correcta">

                    🏆 ¡Completaste la sopa de letras!

                    <p>
                        Excelente trabajo.
                    </p>

                </div>

            `;

        }

    }


    /* ============================================================
       31. INICIALIZAR TODOS LOS JUEGOS
    ============================================================ */

    /*
       Cuando el usuario entra en juegos.html,
       el primer juego que aparecerá será
       "Completa la palabra".
    */

    mostrarPalabra();


    /*
       También preparamos los otros juegos.
    */

    mostrarMito();

    mostrarQuiz();

    mostrarSopa();


    /* ============================================================
       32. BOTÓN DE VOLVER ARRIBA
    ============================================================ */

    /*
       Si existe un botón con el ID volver-arriba,
       hacemos que lleve al comienzo de la página.
    */

    const volverArriba =
        document.getElementById("volver-arriba");


    if (volverArriba) {

        volverArriba.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* ============================================================
       33. ANIMACIÓN AL HACER SCROLL
    ============================================================ */

    /*
       Buscamos elementos que tengan la clase:

           .animar

       Cuando aparecen dentro de la pantalla,
       agregamos la clase "visible".
    */

    const elementosAnimados =
        document.querySelectorAll(".animar");


    function comprobarScroll() {

        elementosAnimados.forEach(
            function (elemento) {

                const posicion =
                    elemento.getBoundingClientRect();


                if (
                    posicion.top <
                    window.innerHeight - 80
                ) {

                    elemento.classList.add(
                        "visible"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        comprobarScroll
    );


    /*
       Ejecutamos una vez al cargar.
    */

    comprobarScroll();


    /* ============================================================
       34. MENSAJE FINAL EN CONSOLA
    ============================================================ */

    console.log("--------------------------------");

    console.log(
        "VIH Joven: juegos inicializados."
    );

    console.log(
        "Completa la palabra: OK"
    );

    console.log(
        "Mitos y realidades: OK"
    );

    console.log(
        "Quiz: OK"
    );

    console.log(
        "Sopa de letras: OK"
    );

    console.log("--------------------------------");


});

/* =========================
   BOTÓN DE LA PORTADA
========================= */

const botonPortada = document.querySelector(".boton");

if (botonPortada) {

    botonPortada.addEventListener("click", function () {

        window.location.href = "vales.html";

    });

}


/* =========================
   RECUPERAR VALES CANJEADOS
========================= */

const valesCanjeados =
    JSON.parse(localStorage.getItem("valesCanjeados")) || [];


/* =========================
   ABRIR VALES
========================= */

const botonesAbrir =
    document.querySelectorAll(".boton-abrir-vale");


botonesAbrir.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const vale = boton.closest(".vale");

        vale.classList.add("abierto");

        boton.style.display = "none";

    });

});


/* =========================
   CANJEAR VALES
========================= */

const botonesCanjear =
    document.querySelectorAll(".boton-canjear");


botonesCanjear.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const vale = boton.closest(".vale");

        const numeroVale = vale.dataset.vale;


        /* Guardamos el número */

        if (!valesCanjeados.includes(numeroVale)) {

            valesCanjeados.push(numeroVale);

            localStorage.setItem(
                "valesCanjeados",
                JSON.stringify(valesCanjeados)
            );

        }


        /* Marcamos visualmente el vale */

        vale.classList.add("canjeado");

        boton.style.display = "none";

    });

});


/* =========================
   MOSTRAR VALES YA CANJEADOS
========================= */

const todosLosVales =
    document.querySelectorAll(".vale");


todosLosVales.forEach(function (vale) {

    const numeroVale = vale.dataset.vale;


    if (valesCanjeados.includes(numeroVale)) {

        vale.classList.add("canjeado");

        const botonCanjear =
            vale.querySelector(".boton-canjear");

        if (botonCanjear) {
            botonCanjear.style.display = "none";
        }


        const contenido =
            vale.querySelector(".contenido-vale");

        if (contenido) {
            contenido.style.display = "block";
        }


        const botonAbrir =
            vale.querySelector(".boton-abrir-vale");

        if (botonAbrir) {
            botonAbrir.style.display = "none";
        }

    }

});
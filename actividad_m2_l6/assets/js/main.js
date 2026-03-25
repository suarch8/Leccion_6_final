$(document).ready(function () {

    // Agregar cuarto elemento - L6
    $("#lista-estudios").append(
        "<li class='list-group-item'>Gestión territorial comunitaria</li>"
    );

    // Botón ocultar lista -L6
    $("#toggleLista").click(function () {
        $("#lista-estudios").slideToggle();

        if ($(this).text() === "Ocultar lista") {
            $(this).text("Mostrar lista");
        } else {
            $(this).text("Ocultar lista");
        }
    });

    // Tooltip bootstrap
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scroll botón "Ir arriba" L5
    $("#botonArriba").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

});
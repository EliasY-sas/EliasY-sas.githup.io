
$(document).ready(function() {

    // Detectar cuando hacemos clic en un enlace del menu
    $(".menu a").click(function(event) {

        // Evitar que la pagina se mueva automaticamente
        event.preventDefault();

        // Obtener el nombre del apartado seleccionado
        var destino = $(this).attr("href");

        // Ocultar el inicio y todos los apartados
        $(".inicio, .seccion").hide();

        // Mostrar solamente el apartado seleccionado
        $(destino).show();

    });

});

//SELECCIONAR ENEMIGO RAND
function seleccionarRival() {
    var zombie = new enemigo("ZomBIe", 1000, 220, 1)
    var gusano = new enemigo("Gusano", 800, 100, 1)
    var esqueleto = new enemigo("Esqueleto", 1800, 200, 1)
    var baron = new enemigo("Baron Nashor", 2300, 130, 1)

    var arrayEnemigos = []
    arrayEnemigos = [zombie, gusano, esqueleto, baron]

    rangoMaximo = arrayEnemigos.length - 1
    rand = numeroRandom(0, rangoMaximo)
    rival = arrayEnemigos[rand]
    return rival
}

function mostrarRival(rival) {
    $("#nombreEnemigo").html(rival.getNombre);
    $("#nivelEnemigo").html(rival.getNivel);
    var rivalVidaMaxima = rival.getVida;
    $("#saludEnemigo").html(rivalVidaMaxima + "/" + rival.getVida);

    log = rival.getNombre + " ha aparecido!"
    $(".log").html(log);
}

function mostrarHeroe(martin) {
    $("#nivel").html(martin.getNivel);
    $("#nombreHeroe").html(martin.getNombre);
    $("#experiencia").html("10 / " + martin.getExperiencia);
    var martinVidaMaxima = martin.getVida
    $("#salud").html(martinVidaMaxima + "/" + martin.getVida);
}

function botonAtaque(martin, rival) {
    var log = ""

    var vidaRestante = parseInt(rival.getVida) - parseInt(martin.dañoDeAtaque());
    rival.setVida = vidaRestante;
    $("#saludEnemigo").html(rival.getVidaMax + "/" + rival.getVida);

    log += "Martin ataca e inflinfe " + martin.dañoDeAtaque() + " puntos de vida! "

    if (rival.conVida()) {
        var vidaRestante = martin.getVida - rival.dañoDeAtaque();
        martin.setVida = vidaRestante;
        $("#salud").html(martin.getVidaMax + "/" + martin.getVida);

        log += rival.getNombre + " ataca y castiga con " + rival.dañoDeAtaque() + " puntos de vida!"
    } else {
        martin.experienciaObtenida(rival.getExperiencia)
        log += rival.getNombre + " ha sido derrotado! Ganas " + rival.getExperiencia + " de EXP"
        $("#experiencia").html("10 / " + martin.getExperiencia);
    }


    if (!martin.conVida()) {
        log += "EL HEROE HA CAIDO! :'("
        $("#boton").css({ "visibility": "hidden" })
        $("#boton2").css({ "visibility": "hidden" })

    }

    if (!rival.conVida()) {
        opcion = parseInt(prompt("ENEMIGO DERROTADO\n1 - Nueva Oleada\n2 - Terminar Partida"));
        switch (opcion) {
            case 1:
                rival = seleccionarRival();
                mostrarRival(rival);
                break;
            case 2:
                log = "Fin de la partida."
                $("#boton").css({ "visibility": "hidden" })
                $("#boton2").css({ "visibility": "hidden" })
                break;
        }
    }

    $(".log").html(log);
}
//BOTON DEFENDER
function botonDefensa(martin, rival) {
    var log = ""

    var ataqueRival = rival.dañoDeAtaque()
    var vidaRestante = parseInt(martin.getVida) - parseInt(martin.ataqueDefendido(ataqueRival));
    martin.setVida = vidaRestante;
    $("#salud").html(martin.getVidaMax + "/" + martin.getVida);

    log += "Martin se defiende y recibe " + Math.round(martin.ataqueDefendido(ataqueRival)) + " puntos de vida! "


    if (!martin.conVida()) {
        $("#boton").css({ "visibility": "hidden" })
        $("#boton2").css({ "visibility": "hidden" })
        log += "EL HEROE HA CAIDO! :'("
    }

    if (!rival.conVida()) {

        prompt("Continuar Jugando")
    }

    $(".log").html(log);
}

function __main__() {
    var martin = new heroe("Martín", 1000, 200, 2);

    mostrarHeroe(martin)

    var rival = seleccionarRival()
    mostrarRival(rival);

    var boton = document.getElementById("boton");
    boton.addEventListener('click', () => {
        botonAtaque(martin, rival)
    })
    boton.removeEventListener("click", botonAtaque(martin, rival))

    boton2 = document.getElementById("boton2");
    boton2.addEventListener('click', () => {
        botonDefensa(martin, rival)
    });



}


__main__();
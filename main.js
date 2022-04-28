function __updateHTML__() {

}

__updateHTML__()



function __main__() {
    var martin = new heroe("Martín", 1000, 200, 2);
    var martinVidaMaxima = martin.getVida
    $(".heroe").css({ "color": "blue", "font-size": "20px", "text-align": "center", "width": "50%", "display": "inline-block", "heigth": "10%" })

    $(".enemigo").css({ "color": "red", "font-size": "20px", "text-align": "center", "width": "50%", "display": "inline-block", "heigth": "10%", "float": "right" })

    //HEROE
    $("#nivel").html(martin.getNivel);
    $("#nombreHeroe").html(martin.getNombre);
    $("#experiencia").html(martin.getExperiencia);
    $("#salud").html(martinVidaMaxima + "/" + martin.getVida);

    /*do {
        var continuar = true;
        opcion = parseInt(prompt("HEROE vs ENEMIGOS - Menú\n---------------\n1 - Combatir\n2 - Héroe\n3 - Finalizar la Aventura"));
        var contador = 0;
        switch (opcion) {
            case 1:
                var enemigo1 = new enemigo("Inés", 1000, 200, 1);
                turno = 1;
                do {
                    contador++

                    if (turno == 1) {
                        //alert("HEROE vs ENEMIGOS\n---------------\nMartín: " + martin.getVida + " --- " + enemigo1.getNombre + ": " + enemigo1.getVida + "\nTurno " + contador + "\nAtaca " + martin.getNombre + " inflinge ¡" + martin.dañoDeAtaque() + "!\n")

                        var vidaRestante = parseInt(enemigo1.getVida) - parseInt(martin.dañoDeAtaque());
                        enemigo1.setVida = vidaRestante;

                        turno = 0;

                    } else if (turno == 0) {
                        //alert("HEROE vs ENEMIGOS\n---------------\nMartín: " + martin.getVida + " --- " + enemigo1.getNombre + ": " + enemigo1.getVida + "\nTurno " + contador + "\nAtaca " + enemigo1.getNombre + " inflinge ¡" + enemigo1.dañoDeAtaque() + "!")

                        var vidaRestante = martin.getVida - enemigo1.dañoDeAtaque();
                        martin.setVida = vidaRestante;

                        turno = 1;
                    }

                } while (enemigo1.conVida() && martin.conVida())

                if (martin.conVida()) {
                    alert("HÉROE vs ENEMIGOS\n---------------\n¡VICTORIA!\nGanas " + enemigo1.getExperiencia + " puntos de Experiencia.\n");

                } else {
                    alert("DERROTA");
                    break;
                }

                //Comprobar Nivel
                martin.setExperiencia = martin.getExperiencia + enemigo1.getExperiencia;
                martin.experienciaObtenida(enemigo1.getExperiencia);

                break;
            case 2:
                alert("HEROE vs ENEMIGOS\n---------------\n" + martin.getNombre + "\nHP: " + martin.getVida + "\nATK: " + martin.dañoDeAtaque() + "\nNVL: " + martin.getNivel);
                break;

            case 3:
                continuar = false;
                break;
        }

    } while (continuar)
*/





    var zombie = new enemigo("ZomBIe", 1000, 220, 1)
    var gusano = new enemigo("Gusano", 800, 100, 1)
    var esqueleto = new enemigo("Esqueleto", 1800, 200, 1)
    var baron = new enemigo("Baron Nashor", 2300, 130, 1)

    var arrayEnemigos = []
    arrayEnemigos = [zombie, gusano, esqueleto, baron]

    //seleccionar enemigo
    rangoMaximo = arrayEnemigos.length - 1
    rand = numeroRandom(0, rangoMaximo)
    rival = arrayEnemigos[rand]

    console.log(rival)

    $("#nombreEnemigo").html(rival.getNombre);
    $("#nivelEnemigo").html(rival.getNivel);
    $("#saludEnemigo").html(rival.getVida);





} __main__();
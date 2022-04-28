class heroe extends personaje {
    constructor(nombre, vida, ataque, nivel) {
        super(nombre, vida, ataque, nivel);
        this.experiencia = 0;
    }


    //SETTERS

    set setExperiencia(experiencia) {
        this.Experiencia = experiencia;
    }

    //FUNCIONES

    experienciaObtenida(valor) {
        var nueva_exp = this.experiencia + valor;
        if(nueva_exp >= 10){
            do{
                this.nivel++;
                this.experiencia = nueva_exp - 10;
                return alert("¡El héroe sube al nivel " + this.nivel + "!");
            }while(nueva_exp >= 10)
        }else{
            this.experiencia += valor;
        }
        
    }
}

function botonAtacar() {
    console.log("hola")
}
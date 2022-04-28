class enemigo extends personaje {
    constructor(nombre, vida, ataque, nivel, experiencia) {
        super(nombre, vida, ataque, nivel, experiencia);
        this.experiencia = 3;
    }
}
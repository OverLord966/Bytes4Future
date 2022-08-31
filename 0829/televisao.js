class Televisao {
    #volume
    #canal
    constructor() {
        this.#canal = 1;
        this.#volume = 50;
    }

    aumentarVolume() {
        //Pode aumentar até 100
        if (this.#volume < 100) {
            return ++this.#volume
        }
    }
    diminuirVolume() {
        //Pode diminuir até 0
        if (this.#volume > 0) {
            //return this.#volume-- //Retorna e depois diminui
            return --this.#volume //Diminui e depois retorna
        }

    }
    mudarCanal(canal) {
        this.#canal = canal >= 1 && canal <= 30 ? canal : this.#canal
        if (canal >= 1 && canal <= 30) {
            this.#canal = canal
        }
    }

    get volume() {
        return this.#volume
    }
    get canal() {
        return this.#canal
    }

    set canal(canal) {
        this.#canal = canal >= 1 && canal <= 30 ? canal : this.#canal
        if (canal >= 1 && canal <= 30) {
            this.#canal = canal
        }
    }
}

// const televisao = new Televisao();
// televisao.mudarCanal(3);// mudarCanal(canal)
// televisao.canal = 4; //set canal(canal)
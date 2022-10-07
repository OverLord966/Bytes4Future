class Projetor {
    ligado
    constructor() {
        this.ligado = false
    }

    ligarDesligar() {
        this.ligado = !this.ligado
    }
}
const projetor = new Projetor()
const armazemDosProjetores = [new Projetor()]

for(let i = 0; i < armazemDosProjetores.length; i++) {
    const elemento = armazemDosProjetores[i]
    elemento.adicionarRefeicao()
}
class ElementoDaLista {
    #dados
    #proximo

    constructor(dados, proximo) {
        this.#dados = dados;
        this.#proximo = proximo;
    }

    get dados() {
        return this.#dados;
    }

    get proximo() {
        return this.#proximo;
    }

    set proximo(elem) {
        this.#proximo = elem;
    }

    get eUltimo() {
        return !this.#proximo; // True se o next não estiver definido
    }

    toString() {
        return `${this.dados} -> ${(this.eUltimo ? 'FIM' : this.proximo.toString())}`
    }
}

class Lista {
    #primeiro;

    get primeiro() {
        return this.#primeiro;
    }

    insereInicio(elem) {
        elem.proximo = this.#primeiro;
        this.#primeiro = elem;
    }

    insereFim(elem) {
        // TODO 1. insere no final
        if (this.#primeiro === undefined) {
            this.#primeiro = elem;
        } else {
            let atual = this.#primeiro;
            while (!atual.eUltimo) {
                atual = atual.proximo
            }
            atual.proximo = elem
        }
    }

    remove(dados) {
        // TODO 2. remove um elemento da lista
        // if (this.#primeiro === undefined) return
        while (this.#primeiro !== undefined
            && this.#primeiro.dados === dados) {
            this.#primeiro = this.#primeiro.proximo
        }

        let atual = this.#primeiro
        while (!atual.eUltimo) {
            if (atual.proximo.dados === dados) {
                atual.proximo = atual.proximo.proximo
            } else {
                atual = atual.proximo
            }
        }
    }

    insereEmOrdem(dados) {
        const elem = new ElementoDaLista(dados);
        // TODO 3. insere em ordem
        if (this.#primeiro === undefined
            || this.#primeiro.dados > elem.dados) {
            elem.proximo = this.#primeiro
            this.#primeiro = elem
        } else {
            let atual = this.#primeiro;
            while(!atual.eUltimo) {
                // && !(atual.dados <= elem.dados
                // && atual.proximo.dados >= elem.dados)) {
                if (atual.dados <= elem.dados
                    && atual.proximo.dados >= elem.dados) {
                    break;
                }
                atual = atual.proximo
            }
            elem.proximo = atual.proximo
            atual.proximo = elem
        }
    }

    toString() {
        return `Início -> ${this.#primeiro?.toString() ?? "FIM"}`
    }
}

const lista = new Lista()
lista.insereFim(new ElementoDaLista(1))
lista.insereInicio(new ElementoDaLista(3))
lista.insereInicio(new ElementoDaLista(2))
lista.insereFim(new ElementoDaLista(2))
lista.insereFim(new ElementoDaLista(4))
lista.insereFim(new ElementoDaLista(5))
lista.insereInicio(new ElementoDaLista(2))
lista.insereInicio(new ElementoDaLista(2))
lista.insereFim(new ElementoDaLista(2))
console.log(lista.toString()) 
// Início -> 2 -> 2 -> 2 -> 3 -> 1 -> 4 -> 5 -> FIM
console.log(insertionSort(lista).toString())
// Início -> 1 -> 2 -> 2 -> 2 -> 3 -> 4 -> 5 -> FIM

function insertionSort(lista) {
    const listaOrdenada = new Lista()

    let atual = lista.primeiro
    while(atual !== undefined) {
        listaOrdenada.insereEmOrdem(atual.dados)
        atual = atual.proximo
    }

    return listaOrdenada;
}
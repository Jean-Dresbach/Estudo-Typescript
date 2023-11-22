// Atividade 1

// Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
//   a. crie uma classe Normal, que herda Ingresso..
//   b. crie uma classe VIP, que herda Ingresso e possui um valor
//   adicional. Altere o método imprimeValor para mostrar o valor
//   do ingresso somado com o adicional.
//   c. crie uma classe Camarote, que herda ingresso e possui um
//   valor adicional. Altere o método imprimeValor para mostrar o
//   valor do ingresso somado com o adicional.

class Ingresso {
  constructor(protected valorReais: number) { }

  imprimeValor(): void {
    console.log(`O valor do ingresso é R$${this.valorReais.toFixed(2)}`);
  }
}

class Normal extends Ingresso { }

class Vip extends Ingresso {
  constructor(valor: number, private adicional: number = 1.2) {
    super(valor)
  }

  imprimeValor(): void {
    console.log(
      `O valor do ingresso vip é R$${(this.valorReais * this.adicional).toFixed(2)}`
    )
  }
}

class Camarote extends Ingresso {
  constructor(valor: number, private adicional: number = 2) {
    super(valor)
  }

  imprimeValor(): void {
    console.log(
      `O valor do camarote é R$${(this.valorReais * this.adicional).toFixed(2)}`
    )
  }
}

console.log("---------- Atividade 1 ----------")
const normal = new Normal(500)
normal.imprimeValor()
const vip = new Vip(500)
vip.imprimeValor()
const camarote = new Camarote(500)
camarote.imprimeValor()



// Atividade 2

// Crie a classe Imovel, que possui um endereço e um preço.
//   a. crie uma classe Novo, que herda Imovel e possui um adicional
//   no preço. Crie métodos de acesso e impressão deste valor
//   adicional.
//   b. crie uma classe Velho, que herda Imovel e possui um desconto
//   no preço. Crie métodos de acesso e impressão para este
//   desconto.

abstract class Imovel {
  constructor(protected endereco: string, protected preco: number) {}

  printInfo(): void {}
}

class Novo extends Imovel {
  constructor(endereco: string, preco: number, private adicional: number) {
    super(endereco, preco + adicional)
  }

  printInfo(): void {
    console.log(`Imovel Novo: Endereço: ${this.endereco} | Preço(adicional incluso): R$${(this.preco + this.adicional).toFixed(2)} | Adional: R$${this.adicional.toFixed(2)}`)
  }
}

class Velho extends Imovel {
  constructor(endereco: string, preco: number, private desconto: number) {
    super(endereco, preco - desconto)
  }

  printInfo(): void {
    console.log(`Imovel Velho: Endereço: ${this.endereco} | Preço(desconto incluso): R$${(this.preco - this.desconto).toFixed(2)} | Desconto: R$${this.desconto.toFixed(2)}`)
  }
}

console.log("---------- Atividade 2 ----------")
const casaNova = new Novo("avenida 2", 50000, 45000)
casaNova.printInfo()
const casaVelha = new Velho("avenida 1", 25000, 5000)
casaVelha.printInfo()



// Atividade 3

// Dado o seguinte diagrama:
//    Animal <- (Cachorro|Cavalo|Gato)
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.



abstract class Animal {
  constructor(protected pelagem: string, protected tamanho: number, protected barulho: string) {}

  andar(): void {
    console.log("andou")
  }

  deitar(): void {
    console.log("deitou")
  }

  comer(): void {
    console.log("deitou")
  }
}

class Cachorro extends Animal {
  latir(): void {
    console.log(this.barulho)
  }

  buscarGraveto(): void {
    console.log("Buscou!")
  }
}

class Gato extends Animal {
  miar(): void {
    console.log(this.barulho)
  }

  derrubarObjetoNoChao() {
    console.log("Derrubou objeto")
  }
}

class Cavalo extends Animal {
  relinchar() {
    console.log(this.barulho)
  }

  coice() {
    console.log("Deu um coice.")
  }
}

console.log("---------- Atividade 3 ----------")
const cachorro = new Cachorro("malhado", 0.6, "auau")
cachorro.latir()
cachorro.andar()
cachorro.buscarGraveto()

const gato = new Gato("laranja", 0.4, "miau")
gato.derrubarObjetoNoChao()
gato.miar()
gato.deitar()


const cavalo = new Cavalo("preto", 2.4, "rilinchin")
cavalo.comer()
cavalo.coice()
cavalo.relinchar()


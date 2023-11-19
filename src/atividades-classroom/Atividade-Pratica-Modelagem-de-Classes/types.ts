// Atividade 1

// Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

export class Counter {
    constructor(private value: string, private counter = 0) {}

    reset() {
        this.counter = 0;
        console.log("Contador zerado. Contador:", this.counter)
    }

    increase(increment: number) {
        this.counter += increment
        console.log("Contador incrementado. Contador:", this.counter)
    }

    returnValue() {
        console.log("Contador:", this.counter)
    }
}



// Atividade 2

// Crie uma classe que modele uma bola:
// a. Atributos
//      i. Cor
//      ii. Circunferência
//      iii. Material
// b. Métodos
//      i. Trocar Cor
//      ii. Mostrar cor

export class Ball {
    constructor(private color: string, private circumference: string, private material: string) {}

    changeColor(newColor: string) {
        this.color = newColor
        console.log("Cor alterada!")
    }

    showColor() {
        console.log(this.color)
    }
}



// Atividade 3

// Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
//      a. Número da conta
//      b. Nome do correntista
//      c. Saldo
// Os métodos são os seguintes:
//      a) Alterar nome
//      b) Deposito
//      c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

export class CurrentAccount {
    constructor(private accountNumber: number, private accountHolder: string, private balance = 0) {}

    changeHolderName(newName: string) {
        this.accountHolder = newName
        console.log("Nome do correntista alterado com sucesso! Correntista atual: ", this.accountHolder)
    }

    deposit(depositValue: number) {
        if (depositValue <= 0) console.log("Valor de depósito inválido!")
        else {
            this.balance += depositValue
            console.log("Valor depositado com sucesso! Seu saldo atual é de: R$", this.balance.toFixed(2))
        }
        
    }

    draft(draftValue: number) {
        if (draftValue <= 0) console.log("Valor de saque inválido!")
        else if(draftValue > this.balance) console.log("Saldo insuficiente! Seu saldo atual é de R$", this.balance.toFixed(2))
        else {
            this.balance -= draftValue
            console.log("Valor sacado com sucesso! Seu saldo atual é de: R$", this.balance.toFixed(2))
        }
    }
}



// Atividade 4

// Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

export class Calculator {
    private historic: string[] = []

    addition(value1: number, value2: number) {
        const saveCalc = `${value1} + ${value2 < 0 ? "("+ value2 +")" : value2} = ${value1 + value2}`
        this.historic.push(saveCalc)
        console.log(saveCalc)
    }

    subtraction(value1: number, value2: number) {
        const saveCalc = `${value1} - ${value2 < 0 ? "("+ value2 +")" : value2} = ${value1 - value2}`
        this.historic.push(saveCalc)
        console.log(saveCalc)
    }

    division(value1: number, value2: number) {
        const saveCalc = `${value1} / ${value2 < 0 ? "("+ value2 +")" : value2} = ${value1 / value2}`
        this.historic.push(saveCalc)
        console.log(saveCalc)
    }

    multiplication(value1: number, value2: number) {
        const saveCalc = `${value1} * ${value2 < 0 ? "("+ value2 +")" : value2} = ${value1 * value2}`
        this.historic.push(saveCalc)
        console.log(saveCalc)
    }

    showHistoric() {
        console.log(this.historic)
    }
}



// Atividade 5

// Faça um programa completo utilizando classes e métodos que:
//     a. Possua uma classe chamada BombaCombustivel, com no
//     mínimo esses atributos:
//         i. tipoCombustivel
//         ii. valorLitro
//         iii. quantidadeCombustivel
//     b. Possua no mínimo esses métodos:
//         i. abastecerPorValor() – método onde é informado o
//         valor a ser abastecido e mostra a quantidade de litros
//         que foi colocada no veículo
//         ii. abastecerPorLitro() – método onde é informado a
//         quantidade em litros de combustível e mostra o valor a
//         ser pago pelo cliente.
//         iii. alterarValor() – altera o valor do litro do combustível.
//         iv. alterarCombustivel() – altera o tipo do combustível.
//         v. alterarQuantidadeCombustivel() – altera a
//         quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

type Action = "take" | "add"

export  class FuelPump {
    constructor(private fuelType: string, private valuePerLiter: number, private amountOfFuelStored: number, private limitOfFuelStored = 20000) {}

    fuelByValue(value: number): void {
        const amountOfFuelBought = value / this.valuePerLiter

        if (this.changeAmountOfFuelStored(amountOfFuelBought, "take")) console.log(`A quantidade total de gasolina ${this.fuelType} abastecida foi de ${amountOfFuelBought.toFixed(2)} litros`)
    }

    fuelByLiter(liters: number): void {
        if (this.changeAmountOfFuelStored(liters, "take")) console.log(`O valor da compra é de R$ ${(liters * this.valuePerLiter).toFixed(2)}`)
    }

    addFuelToTheFuelPump(liters: number): void {
        if (this.changeAmountOfFuelStored(liters, "add")) console.log("Bomba abastecida com sucesso!")
    }

    changeValuePerLiter(newValuePerLiter: number): void {
        if (newValuePerLiter <= 0) console.log("Valor inválido!! Necessário digitar um valor maior que zero.")
        else {
            this.valuePerLiter = newValuePerLiter
            console.log(`Valor por litro da gasolina ${this.fuelType} alterado com sucesso!`)
        }
    }

    changeFuelType(newFuelType: string): void {
        newFuelType ? console.log(`O tipo combustível foi alterado com sucesso para ${this.fuelType = newFuelType}`) : console.log("Tipo de gasolina inválido!")
    }

    private changeAmountOfFuelStored(liters: number, action: Action): boolean {
        if (liters === 0) {
            console.log("Valor inválido!")
            return false
        }
        
        if (action === "add") {
            if (this.amountOfFuelStored + liters > this.limitOfFuelStored) {
                console.log(`O valor abastecido ultrapassa o limite de gasolina na bomba! No momento o máximo de gasolina possível que a bomba pode receber é de ${this.limitOfFuelStored - this.amountOfFuelStored} litros.`)
                return false
            } else {
                this.amountOfFuelStored += liters
                return true       
            }
        } else if (action === "take") {
            if (this.amountOfFuelStored - liters < 0) {
                console.log("Quantidade insuficiente de gasolina na bomba!")
                return false
            } else {
                this.amountOfFuelStored -= liters
                return true
            }
        }
    }
}



// Atividade 6

// Implemente uma classe chamada Carro com as seguintes
// propriedades:
//      a. Um veículo tem um certo consumo de combustível (medidos
//      em km / litro) e uma certa quantidade de combustível no
//      tanque.
//      b. O consumo é especificado no construtor e o nível de
//      combustível inicial é 0.
//      c. Forneça um método andar() que simula o ato de dirigir o
//      veículo por uma certa distância, reduzindo o nível de
//      combustível no tanque de gasolina.
//      d. Forneça um método obterGasolina(), que retorna o nível atual
//      de combustível e forneça um método adicionarGasolina(),
//      para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

export class Car {
    constructor(private consumptionKmPerLiter: number, private fuelAmountInTank = 0, private tankFuelLimit = 50) {}

    getfuelAmountInTank(): void {
        if (this.fuelAmountInTank === 0) {
            console.log(`O tanque está vazio!`)
        } else if (this.fuelAmountInTank === 50) {
            console.log(`O tanque está cheio!`)
        } else {
            const tankLevel = (this.fuelAmountInTank*100/50).toFixed(2)
            console.log(`O nível atual de gasolina no tank é de ${tankLevel}%`)
        }
        
    }

    drive(kilometers: number): void {
        const fuelConsumed = kilometers / this.consumptionKmPerLiter
        
        if (fuelConsumed >= this.fuelAmountInTank) {
            console.log(`O carro ficou sem combustível após andar ${this.fuelAmountInTank * this.consumptionKmPerLiter}km.`)
            this.fuelAmountInTank = 0
        } else {
            this.fuelAmountInTank -= fuelConsumed
        }
    }

    fuelTheCar(liters: number): void {
        if (this.fuelAmountInTank + liters > this.tankFuelLimit) console.log(`O valor abastecido ultrapassa o limite de gasolina do tanque!`)
        else {
            this.fuelAmountInTank += liters
            console.log("Carro abastecido!")
        }
    }
}
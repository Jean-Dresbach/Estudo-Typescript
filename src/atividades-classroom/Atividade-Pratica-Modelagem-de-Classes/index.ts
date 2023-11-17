// Atividade 1

// Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Counter {
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

console.log("---------- Atividade 1 ----------")
const item1 = new Counter("Maçã")
item1.increase(2)
item1.returnValue()
item1.reset()



// Atividade 2

// Crie uma classe que modele uma bola:
// a. Atributos
//      i. Cor
//      ii. Circunferência
//      iii. Material
// b. Métodos
//      i. Trocar Cor
//      ii. Mostrar cor

class Ball {
    constructor(private color: string, private circumference: string, private material: string) {}

    changeColor(newColor: string) {
        this.color = newColor
        console.log("Cor alterada!")
    }

    showColor() {
        console.log(this.color)
    }
}

console.log("---------- Atividade 2 ----------")
const basketBall = new Ball("Laranja", "74,9 cm", "Synthetic leather")
basketBall.showColor()
basketBall.changeColor("Preto")
basketBall.showColor()



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

class CurrentAccount {
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

console.log("---------- Atividade 3 ----------")
const holder1 = new CurrentAccount(1, "Jean")
holder1.changeHolderName("Diener")
holder1.deposit(2000.3216546)
holder1.draft(0)
holder1.draft(3000)
holder1.draft(1500.45546)



// Atividade 4

// Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculator {
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

console.log("---------- Atividade 4 ----------")
const calculator = new Calculator
calculator.addition(0, -4)
calculator.subtraction(2, -2)
calculator.division(25, 5)
calculator.multiplication(-10, 50)
calculator.showHistoric()



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

class FuelPump {
    constructor(private fuelType: string, private valuePerLiter: number, private amountOfFuelStored: number, private limitOfFuelStored = 20000) {}

    fuelByValue(value: number): void {
        const amountOfFuelBought = value / this.valuePerLiter
        
        if (this.amountOfFuelStored < amountOfFuelBought) console.log("Quantidade de insuficiente de gasolina na bomba!")
        else {
            this.amountOfFuelStored -= amountOfFuelBought
            console.log(`A quantidade total de gasolina ${this.fuelType} abastecida foi de ${amountOfFuelBought.toFixed(2)} litros`)
        } 
    }

    fuelByLiter(liters: number) {
        if (this.amountOfFuelStored < liters) console.log("Quantidade de insuficiente de gasolina na bomba!")
        else {
            this.amountOfFuelStored -= liters
            console.log(`O valor da compra é de R$ ${(liters * this.valuePerLiter).toFixed(2)}`)
        }
    }

    changeValuePerLiter(newValuePerLiter: number) {
        if (newValuePerLiter <= 0) console.log("Valor inválido!! Necessário digitar um valor maior que zero.")
        else {
            this.valuePerLiter = newValuePerLiter
            console.log(`Valor por litro da gasolina ${this.fuelType} alterado com sucesso!`)
        }
    }

    changeFuelType(newFuelType: string) {
        newFuelType ? console.log(`O tipo combustível foi alterado com sucesso para ${this.fuelType = newFuelType}`) : console.log("Tipo de gasolina inválido!")
    }

    changeAmountOfFuelStored(liters: number) {
        if (this.amountOfFuelStored < liters)

    }
}

console.log("---------- Atividade 5 ----------")
const fuelPump = new FuelPump("Diesel", 6.1, 100)

fuelPump.changeFuelType("Etanol")
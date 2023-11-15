// Atividade 1

import { type } from "os";

// Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Counter {
    value: string
    counter = 0

    constructor(value: string) {
        this.value = value
        this.counter
    }

    reset() {
        this.counter = 0;
        console.log("Contador zerado. Contador: ", this.counter)
    }

    increase(increment: number) {
        this.counter += increment
        console.log("Contador incrementado. Contador: ", this.counter)
    }

    returnValue() {
        console.log("Contador: ", this.counter)
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
    color: string
    circumference: string
    material: string
    
    constructor(color: string, circumference: string, material: string) {
        this.color = color
        this.circumference = circumference
        this.material = material
    }

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
    accountNumber: number
    accountHolder: string
    balance: number

    constructor(accountNumber: number, accountHolder: string, balance?: number) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance | 0
    }

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
    historic: string[]

    constructor() {
        this.historic = []
    }

    addition(value1: number, value2: number) {
        if (value2 < 0) console.log()
        const saveCalc = `${value1} + ${value2 < 0 ? "("+ value2 +")" : value2} = ${value1 + value2}`
        this.historic.push(saveCalc)
        console.log(saveCalc)
    }

    subtraction(value1: number, value2: number) {

    }

    division(value1: number, value2: number) {

    }

    multiplication(value1: number, value2: number) {

    }

    showHistoric() {
        console.log(this.historic)
    }
}

console.log("---------- Atividade 4 ----------")
const calculator = new Calculator
calculator.addition(0,-4)
calculator.showHistoric()

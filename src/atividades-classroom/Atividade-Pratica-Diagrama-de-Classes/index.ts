// Atividade 1

class Item {
    constructor(private _value: number, private name: string, private description: string) { }

    get valor(): number {
        return this._value
    }

    show(): void {
        console.log(`${this.name} - ${this.description} - R$ ${this._value.toFixed(2)}`)
    }
}

class Order {
    private totalAmount = 0
    constructor(private items: Item[] = []) {
        items.forEach(item => this.totalAmount += item.valor)
    }

    show() {
        this.items.forEach(item => item.show())
        console.log(`Valor total: R$ ${this.totalAmount.toFixed(2)}`)
    }
}


console.log("--------- Atividade 1 ---------")

const item1 = new Item(28, "Copo de Açaí", "Copo de açaí de 700g com 3 complementos grátis")
const item2 = new Item(7.50, "Sanduíche", "Sanduíche de frango.")
const item3 = new Item(5.50, "Refrigerante", "Lata de coca-cola de 350g.")

const order = new Order([item1, item2, item3])
order.show()



// Atividade 2

abstract class ElementShape {
    abstract draw(): void
    abstract resize(value1: number, value2?: number): void
}

class Circle extends ElementShape {
    constructor(private radius: number) {
        super()
    }

    draw(): void {
        console.log(`Círculo com raio de ${this.radius.toFixed(2)}cm desenhado!`)
    }

    resize(newRadius: number): void {
        this.radius = newRadius
        console.log("Raio do círculo alterado!")
        this.draw()
    }
}

class Rectangle extends ElementShape {
    constructor(private width: number, private height: number) {
        super()
    }

    draw(): void {
        console.log(`Retângulo desenhado com ${this.width.toFixed(2)}cm de comprimento e ${this.height.toFixed(2)}cm de altura.`)
    }

    resize(newWidth: number, newHeight: number): void {
        this.width = newWidth
        this.height = newHeight
        console.log("Comprimento e altura alterados!")
        this.draw()
    }
}

console.log("--------- Atividade 2 ---------")

const circle = new Circle(10)
circle.draw()
circle.resize(20)

const rectangle = new Rectangle(20, 5)
rectangle.draw()
rectangle.resize(30, 10)



// Atividade 4

type Months = "Janeiro" | "Fevereiro" | "Março" | "Abril" | "Maio" | "Junho" | "Julho" | "Agosto" | "Setembro" | "Outubro" | "Novembro" | "Dezembro";

class Appointment {
    constructor(private client: Client, private day: number, private month: Months, private hour: number, private minutes: number, private appointmentDescription: string) { }

    show(): void {
        console.log(`O cliente ${this.client.show()} tem um agendamento marcado no dia ${this.day} de ${this.month} as ${this.hour}:${this.minutes}. Descrição: ${this.appointmentDescription}`)
    }
}

class Client {
    constructor(private name: string, private age: number) { }

    show(): string {
        return `${this.name} (${this.age} anos)`
    }
}

class Schedule {
    private appointments: Appointment[]

    constructor() {
        this.appointments = []
    }

    addAppointment(appointment: Appointment) {
        this.appointments.push(appointment)
        console.log("Envento agendado!")
    }

    show() {
        this.appointments.forEach(appointment => appointment.show())
    }
}

console.log("--------- Atividade 4 ---------")

const client1 = new Client("Jean", 21)
const client2 = new Client("João", 22)

const appointment1 = new Appointment(client1, 20, "Dezembro", 19, 45, "Consulta com o dentista.")
const appointment2 = new Appointment(client2, 22, "Janeiro", 20, 30, "Consulta com o clínico geral.")

const schedule = new Schedule()
schedule.addAppointment(appointment1)
schedule.addAppointment(appointment2)
schedule.show()



// Atividade 5

interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void

    aplicarDescontoEmReais(desconto: number): void
}

interface ValorPedido {
    recuperarValorTotal(): number
}

class ItemPedido implements ValorPedido, Desconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }
}

class Pedido {
    itens: ItemPedido[] = [];

    add(item: ItemPedido): void {
        this.itens.push(item);
    }

    removeItem(item: ItemPedido): void {
        const index = this.itens.findIndex((i) => i.nome === item.nome);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }

    recuperarValorTotal(): number {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);

        return total;
    }
}


console.log("--------- Atividade 5 ---------")

const ITEM1 = new ItemPedido(15, "Hambúrguer", 5)
console.log(ITEM1.recuperarValorTotal())
ITEM1.aplicarDescontoEmPorcentagem(20)
console.log(ITEM1.recuperarValorTotal())
const ITEM2 = new ItemPedido(6.5, "Refrigerante", 5)
console.log(ITEM2.recuperarValorTotal())
ITEM2.aplicarDescontoEmReais(2)
console.log(ITEM2.recuperarValorTotal())

const pedido = new Pedido()
pedido.add(ITEM1)
pedido.add(ITEM2)
console.log(pedido.recuperarValorTotal())
pedido.removeItem(ITEM1)
console.log(pedido.recuperarValorTotal())
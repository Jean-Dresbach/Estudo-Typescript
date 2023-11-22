import { User } from "./User"

export class Product {
    constructor(private id: string, public name: string,  public value: number) {}

    show(): string {
        return `Produto: ${this.name} - Valor: R$${this.value.toFixed(2)}`
    }

    comment(string, user: User): void {

    }

    rate(number, User): void {

    }
}
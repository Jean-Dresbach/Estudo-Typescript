import { Product } from "./Product"

export class User {
    private cart: Product[] = []

    constructor(private id: string, public name: string, public username: string, public email: string) {}

    addToCart(product: Product): void {
        this.cart.push(product)
        console.log("Produto adicionado ao carrinho!")
    }

    removeFromCart(product: Product): void {
        const index = this.cart.indexOf(product)
        if (index !== -1) {
            this.cart.splice(index, 1)
            console.log("Produto removido do carrinho!")
        } else {
            console.log("Produto não encontrado!")
        }

    }

    showProducts(): void {
        this.cart.forEach(product => product.show())
    }
}
abstract class BankAccount {
    constructor(protected _accountNumber: number, protected _balance: number) {}

    get accountNumber(): number {
        return this._accountNumber
    }

    get balance() {
        return this._balance;
    }
    
    set balance(newBalance: number) {
        if (newBalance < 0) console.log("Valor de saldo inválido!")
        else this._balance = newBalance  
    }
}

class CurrentAccount extends BankAccount {
    constructor(accountNumber: number, balance: number, private _overDraft: number, private _limit = 1000) {
        super(accountNumber, balance)
    }

    get overDraft(): number {
        return this._overDraft
    }

    get limit(): number {
        return this._limit;
    }
    
    set overDraft(newOverDraft: number) {
        if (newOverDraft < 0) console.log("Valor de check inválido")
        else this._overDraft = newOverDraft
    }

    useOverDraft(value: number){
        if (value < 0 || value > this._limit) console.log("Valor inválido")
        else this._balance -= value;
    }
}

class savingsAccount extends BankAccount {
    constructor(accountNumber: number, balance: number, private _specialCheck: number, private limit = 1000) {
        super(accountNumber, balance)
    }

    calculateInterest(interest: number): void {
        console.log(`O valor do juros é R$${(this.balance * (interest / 100)).toFixed(2)}`)
    }
}
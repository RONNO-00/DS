class Account {
    constructor(hn, bal) {
        this.HolderName = hn;
        this.Balance = bal;
    }
}
class SavingsAccount extends Account {
    constructor(hn, bal, min) {
        super(hn, bal);
        this.MinimumBalance = min;
    }
    #AccountNumber = Math.floor(Math.random() * 5000000000) + 50000000000;
    deposit(amount) {
        this.Balance = this.Balance + amount;
        console.log("Current Balance after Depositing :" + this.Balance);
    }
    withdraw(amount) {
        if (this.Balance - amount >= this.MinimumBalance) {
            if (amount > this.Balance) {
                console.log("You cannot withdraw that much money");
            }
            else {
                this.Balance = this.Balance - amount;
            }
        } else {
            let Print = {
                AccounNumber: this.#AccountNumber,
                CurrentBalance: this.Balance,
                MinimumBalanceRequired: this.MinimumBalance,
            }
            console.log("You need minimum of 500 in your Account")
            console.log(`Current Account Details : ${JSON.stringify(Print)}you need to add atleast ${this.Balance - amount}to withdraw`);
        }
    }
}

class CurrentAccount extends Account {

    #CreditAmount = 15000;
    constructor(hn, bal) {
        super(hn, bal);
    }
    #AccountNumber = Math.floor(Math.random() * 5000000000) + 50000000000;
    deposit(amount) {
        this.Balance = this.Balance + amount;
        console.log("Current Balance after Depositing :" + this.Balance);
    }
    withdraw(amount) {
        const x = this.#CreditAmount + this.Balance
        let y;
        if (amount > this.Balance) {
            if (amount < x) {
                y = (x - amount);
                this.#CreditAmount = -((amount + this.Balance) - this.#CreditAmount);
                this.Balance = 0;
                console.log(`Your Current Balance is : ${this.Balance}`);
                console.log(`Youor Credit Amount Remaining is : ${this.#CreditAmount}`);
            }
            else {
                console.log("You are exceeding you Credit Limit");
                console.log(`Current Credit Remaining :${this.#CreditAmount}`);
            }
        } else {
            this.Balance = this.Balance - amount;
            console.log(`Your Current Account Balance is : ${this.Balance}`);
            console.log(`Your Remaining Credit : ${this.#CreditAmount}`);
        }
    }
    Credit() {
        console.log(this.#CreditAmount);
    }
}
const Ronil = new CurrentAccount("Ronil", 1000);
console.log(Ronil);
Ronil.withdraw(10000);
console.log(Ronil);
Ronil.deposit(5000);
Ronil.deposit(50);
Ronil.withdraw(100);


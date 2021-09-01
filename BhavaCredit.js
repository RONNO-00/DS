class Account {
    constructor(hn, bal) {
        this.HolderName = hn;
        this.Balance = bal;
        if(this.Balance<0)console.log("You Cannot Enter with Negative Balance");
    }
}
class SavingsAccount extends Account {
    constructor(hn, bal, min) {
        super(hn, bal);
        this.MinimumBalance = min;
    }
    #AccountNumber = Math.floor(Math.random() * 5000000000) + 50000000000;
    deposit(withdrawlAmount) {
        this.Balance = this.Balance + withdrawlAmount;
        console.log("Current Balance after Depositing :" + this.Balance);
    }
    withdraw(withdrawlAmount) {
        if (this.Balance - withdrawlAmount >= this.MinimumBalance) {
            if (withdrawlAmount > this.Balance) {
                console.log("You cannot withdraw that much money");
            }
            else {
                this.Balance = this.Balance - withdrawlAmount;
            }
        } else {
            let Print = {
                AccounNumber: this.#AccountNumber,
                CurrentBalance: this.Balance,
                MinimumBalanceRequired: this.MinimumBalance,
            }
            console.log("You need minimum of 500 in your Account")
            console.log(`Current Account Details : ${JSON.stringify(Print)}you need to add atleast ${this.Balance - withdrawlAmount}to withdraw`);
        }
    }
}

class CurrentAccount extends Account {

    #CreditwithdrawlAmount = 15000;
    constructor(hn, bal) {
        super(hn, bal);
    }
    
    #AccountNumber = Math.floor(Math.random() * 5000000000) + 50000000000;
    deposit(amount) {
        if(this.Balance<0){
            console.log("You cannot Enter ")
        }
        while(this.#CreditwithdrawlAmount<15000){
            this.#CreditwithdrawlAmount++;
            amount--;
        }
        console.log(amount);
        this.Balance = this.Balance + amount;
        console.log("Current Balance after Depositing :" + this.Balance);
    }
    withdraw(withdrawlAmount) {
        const TotalBalaceWithCreditLimit = this.#CreditwithdrawlAmount + this.Balance
        let y;
        if (withdrawlAmount > this.Balance) {
            if (withdrawlAmount < TotalBalaceWithCreditLimit) {
                if(this.Balance!=0){
                    withdrawlAmount = withdrawlAmount-this.Balance;
                    withdrawlAmount = Math.abs(withdrawlAmount);
                    this.Balance  = 0;
                   }
                //const CreditBalance = withdrawlAmount+this.Balance;
                //y = (TotalBalaceWithCreditLimit - withdrawlAmount);
                this.#CreditwithdrawlAmount = Math.abs(withdrawlAmount - this.#CreditwithdrawlAmount);
                console.log(`Your Current Balance is : ${this.Balance}`);
                console.log(`Youor Credit withdrawlAmount Remaining is : ${this.#CreditwithdrawlAmount}`);
            }
            else {
                console.log("You are exceeding you Credit Limit");
                console.log(`Current Credit Remaining :${this.#CreditwithdrawlAmount}`);
            }
        } else {
            this.Balance = this.Balance - withdrawlAmount;
            console.log(`Your Current Account Balance is : ${this.Balance}`);
            console.log(`Your Remaining Credit : ${this.#CreditwithdrawlAmount}`);
        }
    }
    BalanceCreditLimit() {
        console.log(this.#CreditwithdrawlAmount);
    }
}
const Ronil = new CurrentAccount("Ronil", 10);
// Ronil.deposit(1000);
// Ronil.BalanceCreditLimit();
Ronil.withdraw(5000);
// Ronil.withdraw(5000);
// Ronil.deposit(5000);
Ronil.deposit(1000);



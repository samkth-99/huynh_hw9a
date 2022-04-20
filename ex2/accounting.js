//export Account class 

module.exports = class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }

    //add amount to the balance 
    credit(amount) {
        this.balance += amount;
    }
    //return account description 
    describe(){
        return `owner: ${this.owner}, balance: ${this.balance}`;
    }
}
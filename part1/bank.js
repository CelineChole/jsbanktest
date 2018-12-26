class Bank {
    constructor() {
        this._nextCustomerId = 1;
        this._customers = [];
    }

    CreateCustomer(name, password) {
        let newCust = new Customer(name, this._nextCustomerId++, password);
        this._customers.push(newCust);
        return newCust;
    }

    FindCustomerById(Id) {
        return this._customers.find(cust => {
            return cust.Id === Id;
        });
    }
}

class Customer {
    constructor(name, Id, password) {
        this.Name = name;
        this.Id = Id;
        this._password = password;
    }
    IsPassword(password) {
        return this._password === password;
    }
}

class Account {
    constructor() {

    }
}

class Money {
    constructor() {

    }
}
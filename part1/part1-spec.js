describe('The Bank - Part 1', () => {
    it('We can build a Bank class', () => {
        const bank = new Bank();
        
        expect(typeof bank).toBe('object');
    });

    it('Has Customer, Account, and Money classes', () => {
        const customer = new Customer();
        const account = new Account();
        const money = new Money();

        expect(typeof customer).toBe('object');
        expect(typeof account).toBe('object');
        expect(typeof money).toBe('object');
    });

    it('Has a customer class with a constructor and properties', () => {
        // Construct with  name, customer Id, and password
        const customer = new Customer("John Smith", 1, "secret");

        expect(customer.Name).toBe("John Smith");
        expect(customer.Id).toBe(1);
    });

    it('Has some password security', () => {
        const customer = new Customer("John Smith", 1, "secret");
        // We can't access the customers password after it is created
        // Note this is NOT robust security!
        expect(customer.Secret).toBe(undefined);

        // Instead we can check if the password matches
        expect(customer.IsPassword("secret").toBe(true));
        
        expect(customer.IsPassword("nothispassword").toBe(false));
    });

    it('Allows us to get a customer from the bank with an Id', () => {
        const bank = new Bank();

        const john = bank.CreateCustomer("John Smith", "secret");
        const samara = bank.CreateCustomer("Samara Dacre", "potato");
        
        expect(john.Id).toBe(1);
        expect(samara.Id).toBe(2);
        expect(john.IsPassword("secret")).toBe(true);
        expect(samara.IsPassword("potato")).toBe(true);
    });

    it('Allows us to find a customer by Id', () => {
        const bank = new Bank();

        bank.CreateCustomer("John Smith", "secret");
        bank.CreateCustomer("Samara Dacre", "potato");

        // Returns the customer object
        expect(bank.FindCustomerById(1).Name).toBe("John Smith");
        expect(bank.FindCustomerById(2).IsPassword("potato")).toBe(true);
    });

    it('Does not return the customer objects we put it', () => {
        const bank = new Bank();

        const john = bank.CreateCustomer("John Smith", "secret");

        // Modifying this object shouldn't modify the bank's data
        john.Name = "Hacker Stan";
        expect(bank.FindCustomerById(1).Name).toBe("John Smith");
    })
});
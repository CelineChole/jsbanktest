describe('The Bank - Part 1', () => {
    it('We can build a Bank class', () => {
        const bank = new Bank();
        
        expect(typeof bank).toBe('object');
    });

    it('Has Customer, Account, and Money classes', () => {
        const customer = new customer();
        const account = new account();
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
        expect(customer.Secret).toBe(undefined);

        // Instead we can check if the password matches
        expect(customer.IsPassword("secret").toBe(true));
        
        expect(customer.IsPassword("nothispassword").toBe(false));
    })
});
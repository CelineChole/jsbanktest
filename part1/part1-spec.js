describe('The Bank - Part 1', () => {
    it('We can build a Bank class', () => {

        const bank = new Bank();
        
        expect(typeof bank).toBe('object');
    });
});
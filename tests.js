// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// sayHello function test
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');

    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string")

    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");

    });
    it('should return the string "Hello, Alex! when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")

    })

});

// sum Function test
describe('sum' , function () {
    it('should be a defined function' , function () {
        expect(typeof sum).toBe('function')

    });
    it('should return a the number 4 when passed the numbers 2 and 2', function () {
        expect(sum(2,2)).toBe(4);

    });
    it('should return a the number 5 when passed the numbers 2 and 3', function () {
        expect(sum(2,3)).toBe(5);

    });
    it('should return false when passed two strings', function () {
        expect(sum("black","sheep")).toBe(false);

    });

});



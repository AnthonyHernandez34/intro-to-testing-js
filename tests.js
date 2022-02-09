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

describe("sayHello",function () {
    it('should be defined function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Anthony" when executed say sayHello("Anthony")', function () {
        expect(sayHello("Anthony")).toBe('Hello, Anthony')
    });
    it('should return "Hello, Jane" when executed say sayHello("Jane")', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane')
    });
    it('should return "Hello, Alex" when executed say sayHello("Jane")', function () {
        expect(sayHello("Alex")).toBe('Hello, Alex')
    });
    it('should return "Hello, Pat" when executed say sayHello("Pat")', function () {
        expect(sayHello("Pat")).toBe('Hello, Pat')
    });
    it('sayHello() should return "Hello, World"', function () {
        expect(sayHello()).toBe("Hello, World");
    });
    it('sayHello(true) should return "Hello, World"', function () {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('sayHello(false) should return "Hello, World"', function () {
        expect(sayHello(false)).toBe("Hello, World");
    });
});

describe("isFive()",function (){
    it('should be defined as function', function () {
        expect(typeof isFive).toBe("function")
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return as "isFive(5)', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return string', function () {
        expect(isFive("5")).toBe(false)
    });
});

describe("isEven()",function (){
    it('should be defined as a "function', function () {
        expect(typeof isEven).toBe("function")
    });
});
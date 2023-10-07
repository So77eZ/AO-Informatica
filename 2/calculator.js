class Calculator {
    setMemory(a) {
        this.memory = a;
    }

    getMemory() {
        return this.memory;
    }

    addition(a, b) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }

    subtraction(a, b) {
        const result = a - b;
        this.history.push(`${a} - ${b} = ${result}`);
        return result;
    }

    division(a, b) {
        const result = a / b;
        this.history.push(`${a} / ${b} = ${result}`);
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.history.push(`${a} * ${b} = ${result}`);
        return result;
    }

    exponentiation(a, b) {
        const result = a ** b;
        this.history.push(`${a} ^ ${b} = ${result}`);
        return result;
    }

    root(a) {
        const result = Math.sqrt(a);
        this.history.push(`√${a} = ${result}`);
        return result;
    }

    constructor() {
        this.history = [];
        this.memory = undefined;
    }
}

const calc = new Calculator();

console.log(calc.addition(2, 3)); // 5
console.log(calc.division(10, 4)); // 2.5
calc.setMemory(calc.exponentiation(2, 10)); // 1024, записали в память
console.log(calc.multiply(-10, calc.getMemory())); // -10240, 1024 взяли из памяти
console.log(`История выполнения:`, calc.history); // Массив из 4 операций
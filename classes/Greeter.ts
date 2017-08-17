class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Halo, " + this.greeting;
    }
}

let greeter = new Greeter("Dimas Maryanto");
console.info(greeter.greet());
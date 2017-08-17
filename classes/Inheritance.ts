class Engine {
    name: string;
    cylinder: number;
    manufacture: string;

    constructor(nama: string, cylinders: number, manufacture: string) {
        this.name = nama;
        this.cylinder = cylinders;
        this.manufacture = manufacture;
    }
}

class Bike extends Engine {
    type: string = "Bike";
    wheels: number;

    constructor(name: string, cylinder: number, manufacture: string, wheels?: number) {
        super(name, cylinder, manufacture);
        this.wheels = wheels != null ? wheels : 2;
    }
}

let cbr1000rr = new Bike("CBR 1000 RR", 4, "Honda");
console.info(cbr1000rr);

class Car extends Engine {
    type: string = "Car";
    wheels: number;

    constructor(name: string, cylinders: number, manufacture: string, wheels: number) {
        super(name, cylinders, manufacture);
        this.wheels = wheels != null ? wheels : 4;
    }
}

let lamborghiniAventador = new Car("Lamborghini Aventador LP-700SV", 8, "Lamborghini", 4);
console.info(lamborghiniAventador);

# Typescript

Di project ini akan membahas catatan penting untuk bahasa pemograman **Typescript**.

## Basic Types

Tipe data yang ada di bahasa typescript.

### Boolean

tipe data boolean pada dasarnya sama dengan bahasa pemograman lain yaitu bernilai `true` or `false`.

```ts
let isDone: boolean = false;
```

### Number

Tipe data number di Javascript adalah floating point 64bit values. Dengan ECMAScript 2015 mendapatkan 
tambahan yaitu hexadecimal dan decimal 

```ts
let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let minus: number = -10;
```

### String

Tipe data string udah pasti, pada dasarnya string di typescript menggunakan **double quotes** dan **single quotes** tapi disini ada
yang spesial dari typescript yaitu bisa menggunakan **language expresion** dengan menggunakan **backtick**

```ts
let firstName: string = "Dimas";
let lastName: string = "Maryanto";
let fullname: string = `${firstName} ${lastName}`;
```

### Array

Typescript sama seperti Javascript, bisa membuat array dalam sebuah variable. Ada 2 cara untuk membuat array
yaitu dengan menggunakan `[]` atau gaya seperti di Java, C++ dll `Array<data-type>`.

```ts
let listHobbies: string[] = ["Riding", "Coding", "Traveling"];
console.info("Hobi saya adalah " + listHobbies);

let listDreamBikes: Array<string> = ["CBR1000RR", "ZX10R", "Panigale 1899"];
console.info("Motor favorite saya adalah " + listDreamBikes[2]);
```

### Enum

Enum di typescript pada dasarnya sama dengan bahasa pemograman lainnya contohnya seperti berikut:

```ts

enum JenisTransaksi {Tunai, NonTunai}

let bayar: JenisTransaksi = JenisTransaksi.NonTunai;
console.info("Nomor rekening melakukan pembambayaran dengan method " + JenisTransaksi[bayar]);
```

### Any

Typescript juga bisa menggunakan dynamic tipe data, artinya jadi kita gak tau tipe data apa yang akan dikembalikan contohnya seperti berikut:

```ts
let apaIni: any = 4;
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);

apaIni = "Halo world";
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);

apaIni = false;
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);
```

## Interfaces

Salah satu inti dari prinsip Typescript adalah pengecekan tipe yang memiliki nilai.
hal ini disebut "duck typing" atau "structural subtyping".

```ts
interface LabelledValue{
    label: string;
}

function printLabel(labelObj: LabelledValue){
    console.info(labelObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);
```

Dalam interface tersebut akan mengecek apakah terdapat variable dengan nama `label` karena itu wajib, meskipun `myObj` 
memiliki variabel lebih dari 1 tetapi klo tidak ada variabel dengan nama dan tipe data yang sesuai `label` 
maka akan terjadi error compilation.


## Classes

Kelas atau `Class` di typescript pada dasarnya sama dengan bahasa **C#** dan **Java** contohnya seperti berikut:

```ts
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
```

### Inheritance

Sifat dari class yang paling sering digunakan adalah inheritance atau pewarisan. contohnya seperti saya punya sebuah kasus 
sebuah mesin memiliki properties `{name, cylinders, manufacture, type, dan wheels}` ada 
2 jenis untuk motor dan mobil yang berbeda spesifikasi berikut:

```ts
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
```

## Iterator dan Generator

Pada dasarnya iterator dan generator juga sama seperti halnya **Java** dan **C#** hanya saja ada beberapa perbedaan di semantiknya seperti berikut:

### for..of statement

untuk iterator yang satu ini dia akan directly mengambil isinya dari array contohnya:

```ts
let listManufacture = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "KTM", "Ducati"];
for (let manufacture of listManufacture) {
    console.info(manufacture);
}
// return Honda, Yamaha, Kawasaki....
```

### for..in statement

untuk iterator ini dia akan mengembalikan indexnya terlebih dahulu, contohnya seperti berikut:

```ts
let helmets = ["Nolan", "Arai", "KYT", "Shark"];
for (let helmet in helmets) {
    console.info(helmet);
}
// return 0, 1, 2, 3
```

## Modules

Dimulai dari ECMAScript 2015, Javascript memiliki konsep modules. 



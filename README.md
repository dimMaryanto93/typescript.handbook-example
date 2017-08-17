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


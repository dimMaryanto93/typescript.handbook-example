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
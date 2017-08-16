// tipe data boolean

let isDone: boolean = false
console.info("Apakah anda yakin ? : " + isDone)

// tipe data number
let yearNow: number = 2017;
let birthyear: number = 1993;
let decimal: number = 6.10;
let hexadecimal: number = 0xf00d;
let decimal_minus: number = -10;
console.info("Number yang diterima: [" + decimal + ", " + hexadecimal + ", " + decimal_minus + "]");

// tipe data string

let firstName: string = "Dimas";
let lastName: string = "Maryanto";
let fullname: string = `${firstName} ${lastName}`;
let umurku: string = `Umur saya adalah ${yearNow - birthyear} tahun`;
console.info("Nama lengkap saya adalah " + fullname + " " + umurku);
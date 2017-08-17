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

// tipe data array
let listHobbies: string[] = ["Riding", "Coding", "Traveling"];
let listDreamBikes: Array<string> = ["CBR1000RR", "ZX10R", "Panigale 1899"];
console.info("Hobi saya adalah " + listHobbies);
console.info("Motor favorite saya adalah " + listDreamBikes[2]);

// tipe data enum

enum JenisTransaksi {Tunai, NonTunai}

let bayar: JenisTransaksi = JenisTransaksi.NonTunai;
console.info("Nomor rekening melakukan pembambayaran dengan method " + JenisTransaksi[bayar]);

// tipe data any
let apaIni: any = 4;
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);

apaIni = "Halo world";
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);

apaIni = false;
console.info("tipe data dari variable apaIni adalah " + typeof apaIni);

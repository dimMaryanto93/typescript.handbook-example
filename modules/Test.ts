import validate from "./ZipCodeValidator";
let strings = ["Hello", "98134", "101", "1234"];

strings.forEach(s => {
   console.info(`"${s}" ${validate(s) ? " Benar" : " Salah"} `)
});
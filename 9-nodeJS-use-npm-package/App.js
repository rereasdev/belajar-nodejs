import validator from "validator";
import chalk from "chalk";
import chalktemplate from "chalk-template";

// console.log(validator.isEmail("rereasdev@gmail.com"));
// console.log(validator.isMobilePhone("+6285600000000", "id-ID"));
// console.log(validator.isNumeric("+6285600000000"));

console.log(chalk.black.bgRed.italic("rere"));

const nama = "rere";
const pesan = chalktemplate`What {bgRed is} the {bgWhite.bold.rgb(10,150,200) best} random word generator? {bgBlue.bold.white ${nama}}`;
console.log(pesan);

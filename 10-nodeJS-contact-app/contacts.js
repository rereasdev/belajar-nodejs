// Core Module
import chalk from "chalk";
import fs from "fs";
import validator from "validator";

//check folder data dan buat jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// check file constacts.js dan buat jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  // baca file json terlebih dahulu
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  // ubah isi file ke format JSON
  const contacts = JSON.parse(fileBuffer);

  // check duplicate number
  const duplicate = contacts.find((contact) => contact.noHP === noHP);
  if (duplicate) {
    console.log(chalk.red.inverse.bold(" No HP sudah terdaftar! "));
    return false;
  }

  // check email valid
  if (!validator.isEmail(email)) {
    console.log(chalk.red.inverse.bold(" Email tidak valid! "));
    return false;
  }

  // check no HP valid
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold(" Nomor HP tidak valid! "));
    return false;
  }

  // push data baru ke isi file di atas
  contacts.push(contact);

  // write to file
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.green.inverse.bold(" data sudah dimasukkan "));
};

export default simpanContact;

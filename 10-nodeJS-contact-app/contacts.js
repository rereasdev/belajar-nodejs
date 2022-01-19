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

// function load contact
const loadContact = () => {
  // baca file json terlebih dahulu
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  // ubah isi file ke format JSON
  const contacts = JSON.parse(fileBuffer);

  return contacts;
};

// function menyimpan contact
const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  //load data json
  const contacts = loadContact();

  // check duplicate No HP
  const duplicateNoHP = contacts.find((contact) => contact.noHP === noHP);
  if (duplicateNoHP) {
    console.log(chalk.red.inverse.bold(" No HP sudah terdaftar! "));
    return false;
  }

  // check duplicate name
  const duplicateName = contacts.find((contact) => contact.nama === nama);
  if (duplicateName) {
    console.log(chalk.red.inverse.bold(" Nama sudah terdaftar! "));
    return false;
  }

  // check email valid
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold(" Email tidak valid! "));
      return false;
    }
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

// function list all contact
const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.green.inverse.bold(" Daftar Contact "));
  contacts.forEach((contact, idx) => {
    console.log(`${idx + 1}. ${contact.nama} \t : ${contact.noHP}`);
  });
};

// function detail contact based on nama
const listDetailContact = (nama) => {
  // load contact data
  const contacts = loadContact();
  // find contact data based on nama
  const detailContact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  // jika ditemukan tampilkan detail
  if (!detailContact) {
    console.log(
      chalk.red.inverse.bold(
        ` ${nama.charAt(0).toUpperCase() + nama.slice(1)} tidak ditemukan! `
      )
    );
  } else {
    console.log(chalk.green.inverse.bold(" Detail Contact "));
    console.log(
      `nama\t : ${
        detailContact.nama.charAt(0).toUpperCase() + detailContact.nama.slice(1)
      }`
    );
    console.log(`Nomor HP : ${detailContact.noHP}`);
    if (detailContact.email) {
      console.log(`Nomor HP : ${detailContact.email}`);
    }
  }
};

// function detail contact based on name
const deleteContact = (nama) => {
  //load contact data
  const contacts = loadContact();
  // create new contact without specific nama
  const newContact = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  // jika panjang contact sama dengan yang baru maka nama tidak ditemukan
  if (contacts.length === newContact.length) {
    console.log(
      chalk.red.inverse.bold(
        ` ${nama.charAt(0).toUpperCase() + nama.slice(1)} tidak ditemukan! `
      )
    );
    return false;
  }

  // jika ditemukan timpa dengan contact yang baru
  fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));
  console.log(
    chalk.green.inverse.bold(
      ` Data Contact ${
        nama.charAt(0).toUpperCase() + nama.slice(1)
      } berhasil dihapus! `
    )
  );
};

export { simpanContact, listContact, listDetailContact, deleteContact };

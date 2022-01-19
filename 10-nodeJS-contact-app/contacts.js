// Core Module
const fs = require("fs"); //Core filesystem
// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

// membuat dinamic pertanyaan dengan Promise untuk menghindari callback hell
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };

  // baca file json terlebih dahulu
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");

  // ubah isi file ke format JSON
  const contacts = JSON.parse(fileBuffer);

  // push data baru ke isi file di atas
  contacts.push(contact);

  // write to file
  fs.writeFile("data/contacts.json", JSON.stringify(contacts), (err) => {
    console.log(err);
  });
  console.log("data sudah dimasukkan");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };

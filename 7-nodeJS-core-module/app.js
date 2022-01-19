// Core Module
const fs = require("fs"); //Core filesystem

// menuliskan string ke file (Synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World Synchronous!");
// } catch (err) {
//   console.log(err);
// }

// menuliskan string ke file (Asynchronous)
// fs.writeFile("data/test.txt", "Hello World Asynchronous!", (err) => {
//   console.log(err);
// });

// membaca isi file (synchrounous)
// const text = fs.readFileSync("data/test.txt", "utf-8");
// console.log(text);

// membaca isi file (synchrounous)
// const text = fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1 pertanyaan
// rl.question("Siapa nama anda : ", (hasil) => {
//     console.log(`Hello ${hasil} `);
//     rl.close();
// });

// 2/ lebih pertanyaan (bisa di taruh di callback dan rl.close bisa d taruh question paling dalam)
// rl.question("Siapa nama anda : ", (hasil) => {
//   rl.question("Masukkan umur anda : ", (umur) => {
//     console.log(`Hello ${hasil} dengan umur ${umur}`);
//     rl.close();
//   });
// });

// buat pertanyaan dan export berformat json
rl.question("Siapa nama anda : ", (hasil) => {
  rl.question("Masukkan umur anda : ", (umur) => {
    //buat object buat tampung data
    const contact = {
      nama: hasil,
      umur: umur,
    };

    // baca file json terlebih dahulu
    const file = fs.readFileSync("data/contacts.json", "utf-8");

    // ubah isi file ke format JSON
    const contacts = JSON.parse(file);

    // push data baru ke isi file di atas
    contacts.push(contact);

    // write to file
    fs.writeFile("data/contacts.json", JSON.stringify(contacts), (err) => {
      console.log(err);
    });
    // console.log(`Hello ${hasil} dengan umur ${umur}`);
    rl.close();
  });
});

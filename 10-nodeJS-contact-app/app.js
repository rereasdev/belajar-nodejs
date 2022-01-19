const { tulisPertanyaan, simpanContact } = require("./contacts");

// pertanyaan di atas kemudian di panggil dengan menggunakan asycn & await
const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda : ");
  const email = await tulisPertanyaan("Masukkan email anda : ");
  const noHP = await tulisPertanyaan("Masukkan No HP anda : ");

  simpanContact(nama, email, noHP);
};

main();

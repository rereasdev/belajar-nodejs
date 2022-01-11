// const fs = require('fs') //* core module
// const cetakNama = require('./coba') //* Local module
// const moment = require('moment')    //* Third Party Module

// const cetakNama = (nama) => `Hi, nama saya ${nama}`
// console.log(cetakNama('rere'))

//import satu object (lihat coba.js)
// const cetakNama = require('./coba')

//import banyak object (lihat coba.js)
const coba = require("./coba");

console.log(
  coba.cetakNama("rere"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);

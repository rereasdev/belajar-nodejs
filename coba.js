// const nama = 'rere';
// const umur = 25;

// console.log('Hello World')

// function
function cetakNama(nama) {
  return nama;
}

// variable
const PI = 3.14;

// object
const mahasiswa = {
  nama: "rere",
  umur: 25,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, umur saya ${this.umur}`;
  },
};
// class
class Orang {
  constructor() {
    console.log("object class telah dibuat");
  }
}

// export hanya satu object
// module.exports = cetakNama

// export banyak object
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// export dengan cara lain
module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};

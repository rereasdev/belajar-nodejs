import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import {
  simpanContact,
  listContact,
  listDetailContact,
  deleteContact,
} from "./contacts.js";

// mengambil argument dari command line
yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      nohp: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.nohp);
    },
  })
  .demandCommand()
  .parse();

// menamplikan semua nama & no HP daftar contact
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "Menampilkan semua Nama dan Nomor HP di daftar Contact",
    builder: {},
    handler() {
      listContact();
    },
  })
  .parse();

//menampikan detail contact berdasarkan nama
yargs(hideBin(process.argv))
  .command({
    command: "detail",
    describe: "Menampilkan Detail di daftar Contact berdasarkan Nama",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      listDetailContact(argv.nama);
    },
  })
  .parse();

//menghapus contact berdasarkan nama
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    describe: "Menghapus Contact berdasarkan Nama",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      deleteContact(argv.nama);
    },
  })
  .parse();

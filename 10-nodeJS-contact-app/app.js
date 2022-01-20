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
  // menamplikan semua nama & no HP daftar contact
  .command({
    command: "list",
    describe: "Menampilkan semua Nama dan Nomor HP di daftar Contact",
    builder: {},
    handler() {
      listContact();
    },
  })
  // menampikan detail contact berdasarkan nama
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
  // menghapus contact berdasarkan nama
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
  .demandCommand()
  .parse();

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import simpanContact from "./contacts.js";

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
        demandOption: true,
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
  .parse();

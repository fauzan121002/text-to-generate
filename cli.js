module.exports = {
  question: [
    {
      name: "pilihan",
      type: "input",
      message: "Pilih fitur :",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Tolong isi pilihan ya! jangan dikosongin!";
        }
      },
    },
    {
      name: "text",
      type: "input",
      message: "Masukkan teks :",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Tolong isi pilihan ya! jangan dikosongin!";
        }
      },
    },
  ],
};

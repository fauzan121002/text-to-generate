module.exports = {
  question: [
    {
      name: "selection",
      type: "input",
      message: "Select feature :",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please input the selection! don't leave it empty!";
        }
      },
    },
    {
      name: "text",
      type: "input",
      message: "Input the text :",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please input the selection! don't leave it empty!";
        }
      },
    },
  ],
};

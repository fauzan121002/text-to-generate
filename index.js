#!/usr/bin/env node

const figlet = require("figlet");
const inquirer = require("inquirer");
const cli = require("./cli.js");
const {
  hilih,
  spongebob,
  textToAscii,
  asciiToText,
  colors,
} = require("./lib/wrapper");
const { version } = require("./package.json");

module.exports = (function () {
  console.log(colors.error, figlet.textSync("TEXT GENERATOR", {}));
  console.log(colors.primary, `text-to-generate version ${version}`);

  let CLIinterface = () => {
    console.log(
      colors.success,
      `
        \rAvailable features :
        \r1. hilih text
        \r2. spongebob case text
        \r3. uppercase text
        \r4. lowercase text
        \r5. text to ascii
        \r6. ascii to text
        \rCtrl+C to exit
      `
    );

    let generator = () => {
      inquirer.prompt(cli.question).then((rules) => {
        let selection = rules.selection;

        if (selection == 1) {
          console.log(hilih(rules.text));
          retry();
        } else if (selection == 2) {
          console.log(spongebob(rules.text));
          retry();
        } else if (selection == 3) {
          console.log(rules.text.toUpperCase());
          retry();
        } else if (selection == 4) {
          console.log(rules.text.toLowerCase());
          retry();
        } else if (selection == 5) {
          console.log(textToAscii(rules.text));
          retry();
        } else if (selection == 6) {
          console.log(asciiToText(rules.text));
          retry();
        } else {
          process.stdout.write("\033c");
          console.log(colors.error, "Please input the selection correctly!");
          CLIinterface();
        }
      });
    };

    generator();
  };

  let retry = () => {
    inquirer
      .prompt([
        {
          name: "continue",
          type: "input",
          message: "continue? Y/N",
        },
      ])
      .then((rules) => {
        if (rules.continue == "Y") {
          CLIinterface();
        } else {
          process.exit;
        }
      });
  };

  CLIinterface();
})();

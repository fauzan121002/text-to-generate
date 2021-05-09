const figlet = require("figlet");
const inquirer = require("inquirer");
const cli = require("./cli.js");
const { hilih, spongebob, colors } = require("./lib/wrapper");
const { version } = require("./package.json");

module.exports = function () {
  let CLIinterface = () => {
    console.log(colors.error, figlet.textSync("TEXT GENERATOR", {}));
    console.log(colors.primary, `text-to-generate version ${version}`);

    console.log(
      colors.success,
      `
		\rFitur Text Generator yang tersedia :
		\r1. hilih text
		\r2. spongebob case text
		\r3. uppercase text
		\r4. lowercase text
		\r5. keluar (Ctrl+C)
	`
    );

    let generator = () => {
      inquirer.prompt(cli.question).then((rules) => {
        let pilihan = rules.pilihan;

        if (pilihan == 1) {
          console.log(hilih(rules.text));
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
        } else if (pilihan == 2) {
          console.log(spongebob(rules.text));
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
        } else if (pilihan == 3) {
          console.log(rules.text.toUpperCase());
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
        } else if (pilihan == 4) {
          console.log(rules.text.toLowerCase());
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
        } else {
          process.stdout.write("\033c");
          console.log(chalk.red("Mohon input pilihan dengan benar!"));
          CLIinterface();
        }
      });
    };

    generator();
  };

  CLIinterface();
};

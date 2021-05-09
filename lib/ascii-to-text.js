module.exports = (text) => {
  return text
    .split(" ")
    .reduce((str, charIndex) => (str += String.fromCharCode(charIndex)), "");
};

module.exports = (text) => {
  let m = "";
  for (let i = 0; i < text.length; i++)
    m += i % 2 !== 0 ? text[i].toUpperCase() : text[i].toLowerCase();
  return m;
};

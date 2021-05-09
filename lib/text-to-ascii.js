module.exports = (text) => {
  return text
    .split("")
    .map((item) => item.charCodeAt(0))
    .join(" ");
};

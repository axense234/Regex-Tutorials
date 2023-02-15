// Special Characters and Overall Review

const stringExample =
  "The fat cat ran down the street.It was searching for a mouse to eat";

// g stands for globa,gi stands for global case insensitive
const regexEX1 = /Ut/g;

// the + is a quantifier that also selects multiple filters in a row
const regexEX2 = /l+/g;
// the ? is another quantifier that makes the last characther optional
const regexEX3 = /ea?/g;

// the * is another quantifier that combines the + and ? quantifiers
const regexEX4 = /re*/g;

// the . is another quantifier that matches the filter and the prev character
const regexEX5 = /.at/g;

// the \ is an escape character
const regexEX6 = /\./g;

// the \w matches all words
const regexEX7 = /\w/g;

// the \s matches all white space
const regexEX8 = /\s/g;

// in {} we can put a range of characters
const regexEX9 = /\w{10,12}/g;

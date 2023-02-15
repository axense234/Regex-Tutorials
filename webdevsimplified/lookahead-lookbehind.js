// Lookbehind
// we can look at something proceded by x,but not actually x
const regexEX1 = /(?<=[lL]orem)./g;
// Negative lookbehind
const regexEX2 = /(?<![lL]orem)./g;

// Lookahead
// we can look at something followed by x,but not actually x

const regexEX3 = /.(?=at)/g;
// Negative lookahead
const regexEX4 = /.(?!at)/g;

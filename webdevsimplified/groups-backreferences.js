// the characters in [] represent a selection/range of characters we can filter
const regexEX1 = /[fc]at/g;
const regexEX2 = /[a-zA-Z]ab/g;
const regexEX3 = /[0-9]ag/g;

// the | represents OR
// the characters in () act as their own group
const regexEX4 = /(t|T)/g;

// the ^ represents only the beginning of a new paragraph and multiline(gm for global multiline)
const regexEX5 = /^L/g;
const regexEX6 = /^L/gm;

// the & represents only the end of a new paragraph and multiline(gm for global multiline)

const regexEX7 = /ipsum.$/gm;

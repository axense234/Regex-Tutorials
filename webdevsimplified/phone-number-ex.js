// 1234567890
const phoneNumberRegex1 = /\d{10}/g;

// 123-456-7890

const phoneNumberRegex2 = /\d{3}-?\d{3}-?\d{4}/g;

// 123 456 7890

const phoneNumberRegex3 = /\d{3}[ -]?\d{3}[ -]?\d{4}/g;

// we want to turn 123 456 7890 into 1234567890
// we also named our groups using ? <group name>

const phoneNumberRegex4 =
  /(?<areacode>\d{3})[ -]?(?<lol>\d{3})[ -]?(?<idk>\d{4})/g;

// (123) (456)-7890

const phoneNumberRegex5 =
  /\(?(?<areacode>\d{3})\)?[ -]?\(?(?<lol>\d{3})\)?[ -]?\(?(?<idk>\d{4})\)?/g;

// +1 123 456 7890

const phoneNumberRegex6 =
  /(?:(\+1)([ -]))?\(?(?<areacode>\d{3})\)?[ -]?\(?(?<lol>\d{3})\)?[ -]?\(?(?<idk>\d{4})\)?/g;

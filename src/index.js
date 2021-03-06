const numWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}
module.exports = function toReadable(number) {

  if (number > 20 && number < 100) {
    let decade = Math.trunc(number / 10) * 10;
    let remainder = number % 10;
    if (Number.isInteger(number / 10)) {
      return numWords[decade];

    } else {
      return `${numWords[decade]} ${numWords[remainder]}`;
    }
  }

  if (number >= 100 && number < 1000) {
    let century = Math.trunc(number / 100);
    if (Number.isInteger(number / 100)) {
      return `${numWords[century]} hundred`;

    } else if ((number % 100) < 20 || Number.isInteger(number / 10)) {
      let decade = number % 100;
      return `${numWords[century]} hundred ${numWords[decade]}`;

    } else {
      let decade = number % 100;
      let fullDecade = Math.trunc(decade / 10) * 10;
      let remainder = decade % 10;
      return `${numWords[century]} hundred ${numWords[fullDecade]} ${numWords[remainder]}`;
    }
  }
  return numWords[number];
}

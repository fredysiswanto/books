// eslint-disable-next-line camelcase

import kode_wilayah from '../../data/kode_wilayah.js';
function randomInteger() {
  const result = {};
  // result.day = Math.floor(Math.random() * (max - min + 1)) + min;
  result.days = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  result.months = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  result.years = Math.floor(Math.random() * (10 - 30 + 1)) + 30;
  result.kode = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
  // eslint-disable-next-line no-unused-expressions
  result.days < 10 ? (result.days = `0${result.days}`) : result.days;
  // eslint-disable-next-line no-unused-expressions
  result.months < 10 ? (result.months = `0${result.months}`) : result.months;
  return result;
}
function generateKtp() {
  const { kode, days, months, years } = randomInteger();
  const code = kode_wilayah[kode].replace(/\./g, '');
  const result = `${code}${days}${months}${years}0001`;
  return result;
}

const generatorKtp = (request, h) => {
  const data = {
    status: 'success',
    data: {
      nik: generateKtp(),
    },
  };
  return data;
};

export default generatorKtp;

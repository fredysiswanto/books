/* eslint-disable camelcase */

import kode_wilayah from '../../data/kode_wilayah.js';
import { randomInteger } from './helperGenerator.js';
const noNik = () => {
  const { kode, days, months, years } = randomInteger();
  const code = kode_wilayah[kode].replace(/\./g, '');
  const result = `${code}${days}${months}${years}0001`;
  return result;
};

const generatorNiK = (request, h) => {
  const data = {
    status: 'success',
    data: {
      nik: noNik,
    },
  };
  return data;
};

export { generatorNiK, noNik };

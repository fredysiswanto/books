import { faker } from '@faker-js/faker/locale/id_ID';
import { noNik } from './nik.js';

function randomEmail(params) {
  return faker.internet.email({ provider: params });
}

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

function randomUsers() {
  const data = {
    id: faker.string.numeric(),
    nik: noNik(),
    nama: faker.person.fullName(),
    tangalLahir: faker.date.birthdate(),
    jenisKelamin: faker.person.sex(),
    alamat: faker.location.streetAddress(),
    statusPerkawinan: 'menikah',
    pekerjaan: faker.person.jobType(),
    kewarganegaraan: 'Indonesia',
  };
  // console.log(noNik());
  return data;
}

function checkNikFormat(nik) {
  const formatNik =
    /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;
  return nik.match(formatNik) ? nik.match(formatNik)[0] : null;
}

export { randomInteger, randomEmail, randomUsers, checkNikFormat };

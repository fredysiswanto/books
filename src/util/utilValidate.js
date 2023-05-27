import Joi from 'joi';
import { checkNikFormat } from '../generator/helperGenerator.js';

const birthYearSchema = Joi.string().custom((value, helpers) => {
  const year = new Date(value).getFullYear();
  if (year >= 1700 && year <= 1800) {
    return value;
  } else {
    return helpers.error('any.invalid');
  }
}, 'custom validation');

const nikSchema = Joi.string().custom((value, helpers) => {
  if (checkNikFormat(value)) {
    return value;
  } else {
    return helpers.error('any.invalid');
  }
}, 'custom validation');

const schema = Joi.object({
  nik: nikSchema,
  nama: Joi.string().min(3).max(255),
  tangalLahir: birthYearSchema,
  jenisKelamin: Joi.string().valid('male', 'female'),
  alamat: Joi.string().min(10).max(255),
  statusPerkawinan: Joi.string().valid(
    'kawin',
    'belum kawin',
    'cerai hidup',
    'cerai mati'
  ),
  pekerjaan: Joi.string().min(3).max(255),
  kewarganegaraan: Joi.valid('indonesia'),
});

function validatorUser(payload) {
  const { error } = schema.validate(payload);
  //   const { error, value } = schema.validate(payload);

  if (error) {
    return error.message.replace(/"/g, '');
  }
  return true;
}

export { validatorUser };

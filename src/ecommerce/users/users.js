// import fs from 'fs';
import { validatorUser } from '../../util/utilValidate.js';
import dataUser from '../../../data/users.js';

// const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

const getUsersHandler = (request, h) => {
  // const listUser = [];
  // for (let index = 0; index < 10; index++) {
  //   listUser.push(randomUsers());
  // }

  const data = {
    statusCode: 'success',
    message: 'data ditemukan',
    data: dataUser,
  };
  return data;
};
const AddUsersHandler = (request, h) => {
  const {
    nik,
    nama,
    tanggalLahir,
    jenisKelamin,
    alamat,
    statusPerkawinan,
    pekerjaan,
  } = request.payload;
  const id = dataUser.length;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const newUser = {
    id,
    nik,
    nama,
    tanggalLahir,
    jenisKelamin,
    alamat,
    statusPerkawinan,
    pekerjaan,
    createdAt,
    updatedAt,
  };
  const inputUser = validatorUser(request.payload);
  if (inputUser === true) {
    dataUser.push(newUser);
    const data = {
      statusCode: 'success',
      message: 'data berhasil ditambahkan',
      data: newUser,
    };
    return data;
  } else {
    return {
      statusCode: 'failed',
      message: 'check your input',
      data: inputUser,
    };
  }
};

export { getUsersHandler, AddUsersHandler };

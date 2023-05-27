// import books from './books.js';
import {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  // getBookOptional,
} from './handler.js';
import { generatorNiK } from './generator/nik.js';
import generatorEmail from './generator/email.js';
import auth from './auth/login.js';
import { getUsersHandler, AddUsersHandler } from './ecommerce/users/users.js';
const routes = [
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
  {
    method: 'GET',
    path: '/generator/nik',
    handler: generatorNiK,
  },
  {
    method: 'GET',
    path: '/generator/email/{domain}',
    handler: generatorEmail,
  },
  {
    method: 'POST',
    path: '/login',
    handler: auth,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getUsersHandler,
  },
  {
    method: 'POST',
    path: '/user',
    handler: AddUsersHandler,
  },
];
// console.log(books);

export default routes;

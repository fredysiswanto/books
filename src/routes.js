// import books from './books.js';
import {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  // getBookOptional,
} from './handler.js';
import generatorKtp from './generator/ktp.js';
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
    path: '/generator/ktp',
    handler: generatorKtp,
  },
];
// console.log(books);

export default routes;

// import books from './books.js';
import {
  getAllBooksHandler,
  addBookHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  // getBookOptional,
} from './handler.js';

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
  // {
  //   method: 'GET',
  //   path: '/books1',
  //   handler: getBookOptional,
  // },
];
// console.log(books);

export default routes;

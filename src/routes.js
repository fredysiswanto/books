import books from './books.js';
import { getAllBooksHandler } from './handler.js';

const routes = [
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

// console.log(books.getAllBook());
export default routes;

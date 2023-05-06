// import { nanoid } from 'nanoid';
// import notes from './notes.js';

// const addNoteHandler = (request, h) => {
//   const { title, tags, body } = request.payload;
//   const id = nanoid(16);
//   const createAt = new Date().toISOString();
//   const updateAt = createAt;
//   const newNote = {
//     title,
//     tags,
//     body,
//     id,
//     createAt,
//     updateAt,
//   };
//   notes.push(newNote);
//   const isSucces = notes.filter((note) => note.id === id).length > 0;
//   if (isSucces) {
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil ditambahkan',
//       data: {
//         noteId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }
//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan gagal ditambahkan',
//   });
//   response.code(500);
//   return response;
// };

// const getAllNotesHandler = () => ({
//   status: 'success',
//   data: {
//     notes,
//   },
// });

// const getNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const note = notes.filter((e) => e.id === id)[0];

//   if (note !== undefined) {
//     return {
//       status: 'success',
//       data: {
//         note,
//       },
//     };
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const editNoteByIdHandler = (request, h) => {
//   const { id } = request.params;
//   const { title, tags, body } = request.payload;
//   const updateAt = new Date().toISOString();
//   const index = notes.findIndex((note) => note.id === id);
//   if (index !== -1) {
//     notes[index] = {
//       ...notes[index],
//       title,
//       tags,
//       body,
//       updateAt,
//     };
//     const response = h.response({
//       status: 'succes',
//       message: 'Catatan berhasil di update',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'failed',
//     message: 'gagal memperbaharui catatan, Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };
// const deleteNoteByIdHandler = (request, h) => {
//   const { id } = request.params;
//   const index = notes.findIndex((note) => note.id === id);

//   if (index !== -1) {
//     notes.splice(index, 1);
//     const response = h.response({
//       status: 'Succes',
//       message: 'Catatan berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }
// };

// class BookHandler {
//   constructor(idBuku, JudulBuku, pengarang, penerbit, harga, terjual) {
//     this.idBuku = idBuku;
//     this.JudulBuku = JudulBuku;
//     this.pengarang = pengarang;
//     this.penerbit = penerbit;
//     this.harga = harga;
//     this.terjual = terjual;
//   }

//   getAllBook() {
//     return {
//       status: 'success',
//       data: {
//         notes,
//       },
//     };
//   }
// }

// export {
//   addNoteHandler,
//   getAllNotesHandler,
//   getNoteByIdHandler,
//   editNoteByIdHandler,
//   deleteNoteByIdHandler,
//   BookHandler,
// };

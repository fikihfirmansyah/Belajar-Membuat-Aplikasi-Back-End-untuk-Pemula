const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');
const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
  } = require('./handler');
  const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
  } = require('./handler');
  
const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
      },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: () => {},
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },
  ];
  const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
  });
   
  module.exports = { addNoteHandler, getAllNotesHandler };
  
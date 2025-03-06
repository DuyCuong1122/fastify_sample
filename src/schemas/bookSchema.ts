export const bookSchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        public_date : { type: 'string' },
        genre: { type: 'string' },
        price: { type: 'number' },
    },
    required: ['title', 'author'],
  };
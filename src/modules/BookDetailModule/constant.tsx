export const BOOK = {
    bookId: 1,
    title: 'Programming Rust',
    author: 'Jim Blandy',
    publisher: 'O\'Reilly Media',
    description: 'Rust is a new systems programming language that combines the performance and low-level control of C and C++ with memory safety and thread safety...',
    price: 19000,
    stock: 21,
    releaseDate: '2018-01-16',
    isbn: '9781491927281',
    imageUrl:
    'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-72357-6',
    category: 'Programming',
    pages: 619,
    lang: 'English',
};

export const REVIEWS = [
    {
      reviewId: 1,
      bookId: 1,
      userId: 1,
      content: 'Lorem ipsum dolor sit amet consectetur...',
      rating: 5,
      createdAt: '2023-12-04T14:15:00Z',
    },
    {
      reviewId: 2,
      bookId: 1,
      userId: 2,
      content: 'A great book for learning Rust!',
      rating: 4,
      createdAt: '2023-12-04T14:20:00Z',
    },
  ];
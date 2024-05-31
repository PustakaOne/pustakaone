import React from 'react';
import { Header, Filter, BookList } from './section';
import { BookProps } from './interface';

export const BookListModule: React.FC = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/books`,
    {
      cache: 'no-cache',
    },
  );

  let books: BookProps[];
  if (response.ok) {
    books = await response.json();
  } else {
    books = [];
  }

  return (
    <>
      <div className="content flex flex-wrap justify-center">
        <Header />
        <div className="flex">
          <div className="w-1/3">
            <Filter />
          </div>
          <div className="w-2/3">
            <BookList books={books} />
          </div>
        </div>
      </div>
    </>
  );
};

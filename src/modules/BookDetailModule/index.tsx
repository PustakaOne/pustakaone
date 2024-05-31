import React from 'react';
import { BookBuy, BookDetail } from './section';
import { BookDetailProps } from './interface';

export const BookDetailModule: React.FC<{ bookId: string }> = async ({
  bookId,
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/books/${bookId}`,
    {
      cache: 'no-cache',
    },
  );
  console.log(response.ok);
  const book: BookDetailProps = await response.json();
  console.log(book);
  return (
    <>
      <div className="content flex flex-wrap py-5">
        <div className="w-1/3">
          <BookBuy book={book} bookId={bookId} />
        </div>
        <div className="w-2/3">
          <BookDetail />
        </div>
      </div>
    </>
  );
};

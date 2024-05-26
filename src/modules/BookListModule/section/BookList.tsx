import React from 'react';
import { BookCard } from '@/components';
import Link from 'next/link';
import { BookListProps } from '../interface';

export const BookList: React.FC<BookListProps> = ({books}) => {
  return (
    <section className="py-14">
      <div className="container flex flex-col items-left gap-8">
        <div className="flex flex-wrap justify-left gap-5">
          {books.map((book, index) => (
            <Link href={`./shop/${book.bookId.toString()}`} key={index}>
              <BookCard
                title={book.title}
                author={book.author}
                price={book.price}
                imageUrl={book.coverUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

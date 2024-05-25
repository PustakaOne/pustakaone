import React from 'react';
import { BookCard } from '@/components';
import { BOOKS } from '../constant';
import Link from 'next/link';

export const BookList: React.FC = () => {
    return (
    <section className="py-14">
        <div className="container flex flex-col items-left gap-8">
            <div className="flex flex-wrap justify-left gap-5">
                {BOOKS.map((book, index) => (
                  <Link href={`./${book.bookId.toString()}`} key={index}>
                    <BookCard
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    rating={book.rating}
                    imageUrl={book.imageUrl}
                    />
                  </Link>
                ))}
            </div>
        </div>
    </section>
    );
};
    

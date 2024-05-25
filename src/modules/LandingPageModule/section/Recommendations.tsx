import React from 'react';
import { SmallStrip } from '../module-elements';
import { BookCard, Button } from '@/components';
import Link from 'next/link';
import { BOOKS } from '../constant';

export const Recommendations: React.FC = () => {
  return (
    <section className="bg-[#E6E6E6] py-14">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">
            Rekomendasi Buku Pilihan
          </h2>
          <SmallStrip />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {BOOKS.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              price={book.price}
              rating={book.rating}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
        <Link href="/shop">
          <Button variant="secondary" size="sm">
            Lihat Lebih Banyak
          </Button>
        </Link>
      </div>
    </section>
  );
};

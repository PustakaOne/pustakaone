'use client';

import React from 'react';
import { BookBuy, BookDetail } from './section';
import { useParams } from 'next/navigation';
import { BookProps, BookDetailProps } from './interface';

export const BookDetailModule: React.FC = async () => {
  const params = useParams<{id: string}>();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/books/${params.id}`,
    {
      cache: 'no-cache',
    },
  );

  const book: BookDetailProps = await response.json();

  return (
    <>
      <div className='content flex flex-wrap py-5'>
        <div className='w-1/3'>
          <BookBuy book={book}/>
        </div>
        <div className='w-2/3'>
          <BookDetail />
        </div>
      </div>
    </>
  );
};

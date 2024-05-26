import React from 'react';
import { BookBuy, BookDetail } from './section';

export const BookDetailModule: React.FC = () => {
  return (
    <>
      <div className='content flex flex-wrap py-5'>
        <div className='w-1/3'>
          <BookBuy />
        </div>
        <div className='w-2/3'>
          <BookDetail />
        </div>
      </div>
    </>
  );
};

import React from 'react';
import { Header, Filter, BookList } from './section';

export const BookListModule: React.FC = () => {
  return (
    <>
      <div className="content flex flex-wrap justify-center">
        <Header />
        <div className="flex">
          <div className="w-1/3">
            <Filter />
          </div>
          <div className="w-2/3">
            <BookList />
          </div>
        </div>
      </div>
    </>
  );
};

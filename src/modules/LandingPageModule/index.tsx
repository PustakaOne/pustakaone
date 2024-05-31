import React from 'react';
import {
  BookOfTheMonth,
  Category,
  Header,
  Reasons,
  Recommendations,
  RegisterNow,
  Testimony,
} from './section';
import { BookProps } from './interface';

export const LandingPageModule: React.FC = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BOOKSHOP_URL}/books`,
    {
      cache: 'no-cache',
    },
  );

  const books: BookProps[] = await response.json();

  let recomendationBooks: BookProps[];
  if (response.ok) {
    recomendationBooks = books.sort((a, b) => a.price - b.price).slice(0, 5);
  } else {
    recomendationBooks = [];
  }
  return (
    <>
      <Header />
      <Recommendations books={recomendationBooks} />
      {/* <Category />
      <BookOfTheMonth /> */}
      <Reasons />
      <Testimony />
      <RegisterNow />
    </>
  );
};

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
import { customFetch } from '@/components/utils';

export const LandingPageModule: React.FC = async () => {
  //   const books = await customFetch('bookshop', '/books');
  return (
    <>
      <Header />
      <Recommendations />
      <Category />
      <BookOfTheMonth />
      <Reasons />
      <Testimony />
      <RegisterNow />
    </>
  );
};

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

export const LandingPageModule: React.FC = () => {
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

import React from 'react';
import { RemoveMeSection } from './section';
import { EXAMPLE_MESSAGE } from './constant';

export const CartModule: React.FC = () => {
  return (
    <>
      <RemoveMeSection message={EXAMPLE_MESSAGE} />
      {/* <AnotherSection /> */}
    </>
  );
};

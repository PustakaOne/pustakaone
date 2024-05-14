import React from 'react';
import { RemoveMeSectionProps } from '../interface';

export const RemoveMeSection: React.FC<RemoveMeSectionProps> = ({
  message,
}) => {
  return (
    <section>
      {message}! This is just an example section. You can either delete me or
      replace me!
    </section>
  );
};

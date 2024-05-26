import React from 'react';
import { IconProps } from './interface';

export const Star: React.FC<IconProps> = ({ className, size, fill }) => {
  return (
    <svg className={`${className} ${size}`} viewBox="0 0 17 18" fill="none">
      <path
        d="M4.126 15.375L5.27704 10.399L1.41663 7.0521L6.51663 6.6094L8.49996 1.91669L10.4833 6.6094L15.5833 7.0521L11.7229 10.399L12.8739 15.375L8.49996 12.7365L4.126 15.375Z"
        className={fill}
      />
    </svg>
  );
};

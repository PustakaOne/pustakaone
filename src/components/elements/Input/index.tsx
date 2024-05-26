import React from 'react';
import { InputProps } from './interface';

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`bg-[#E6E6E6] rounded-full py-2 px-6 ${className}`}
      {...props}
    />
  );
};

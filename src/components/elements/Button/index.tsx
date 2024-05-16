import React from 'react';
import { ButtonProps } from './interface';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#FF8024] rounded-full py-2 px-6 font-bold';
      case 'secondary':
        return '';
      case 'tertiary':
        return '';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return '';
      case 'md':
        return '';
    }
  };

  return (
    <button className={`${getStyle()} ${getSize()} ${className}`} {...props}>
      {children}
    </button>
  );
};

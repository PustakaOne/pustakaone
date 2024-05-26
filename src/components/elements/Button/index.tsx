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
        return 'bg-[#FF8024]';
      case 'secondary':
        return 'bg-white';
      case 'tertiary':
        return 'bg-transparent border border-white';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'px-5 py-1';
      case 'md':
        return 'px-9 py-2.5';
    }
  };

  return (
    <button
      className={`font-semibold rounded-full ${getStyle()} ${getSize()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

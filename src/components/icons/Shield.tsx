import React from 'react';
import { IconProps } from './interface';

export const Shield: React.FC<IconProps> = ({ className, size, fill }) => {
  return (
    <svg className={`${size} ${className}`} viewBox="0 0 51 51" fill="none">
      <path
        d="M25.5 3.625L6.75 9.875V28.625C6.75 38.9814 15.1436 47.375 25.5 47.375C35.8564 47.375 44.25 38.9814 44.25 28.625V9.875L25.5 3.625ZM40.7344 28.625C40.7344 37.0381 33.9131 43.8594 25.5 43.8594C17.0869 43.8594 10.2656 37.0381 10.2656 28.625V12.5117L25.5 7.14062L40.7344 12.5117V28.625Z"
        className={fill}
      />
      <path
        d="M18.9765 23.6982C18.8136 23.5346 18.62 23.4047 18.4067 23.3161C18.1935 23.2275 17.9648 23.1819 17.7339 23.1819C17.5029 23.1819 17.2743 23.2275 17.061 23.3161C16.8478 23.4047 16.6541 23.5346 16.4912 23.6982C16.3275 23.8612 16.1976 24.0548 16.109 24.2681C16.0204 24.4813 15.9748 24.71 15.9748 24.9409C15.9748 25.1719 16.0204 25.4005 16.109 25.6138C16.1976 25.827 16.3275 26.0207 16.4912 26.1836L22.8095 32.502L22.9121 32.6045C23.0662 32.7589 23.2492 32.8814 23.4507 32.965C23.6522 33.0485 23.8683 33.0916 24.0864 33.0916C24.3045 33.0916 24.5206 33.0485 24.7221 32.965C24.9236 32.8814 25.1066 32.7589 25.2607 32.6045L36.1738 21.6914C36.3282 21.5373 36.4507 21.3543 36.5343 21.1528C36.6178 20.9512 36.6609 20.7352 36.6609 20.5171C36.6609 20.2989 36.6178 20.0829 36.5343 19.8814C36.4507 19.6799 36.3282 19.4969 36.1738 19.3428L36.0371 19.2061C35.883 19.0517 35.6999 18.9292 35.4984 18.8456C35.2969 18.762 35.0809 18.719 34.8628 18.719C34.6446 18.719 34.4286 18.762 34.2271 18.8456C34.0256 18.9292 33.8426 19.0517 33.6885 19.2061L24.084 28.8057L18.9765 23.6982Z"
        className={fill}
      />
    </svg>
  );
};

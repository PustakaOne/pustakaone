import React from 'react';
import { IconProps } from './interface';

export const CustomerService: React.FC<IconProps> = ({
  className,
  size,
  fill,
}) => {
  return (
    <svg className={`${className} ${size}`} viewBox="0 0 51 51" fill="none">
      <path
        d="M39.5 31.25C40.2291 29.4792 40.625 27.5834 40.625 25.5C40.625 24 40.3958 22.5625 40 21.2292C38.6458 21.5417 37.2291 21.7084 35.75 21.7084C32.7207 21.7116 29.7351 20.9865 27.0448 19.5942C24.3545 18.202 22.0384 16.1833 20.2916 13.7084C18.4231 18.2296 14.8981 21.8663 10.4375 23.875C10.3541 24.3959 10.3541 24.9584 10.3541 25.5C10.3541 27.489 10.7459 29.4585 11.507 31.2961C12.2682 33.1337 13.3838 34.8033 14.7902 36.2098C17.6306 39.0501 21.483 40.6459 25.5 40.6459C27.6875 40.6459 29.7916 40.1667 31.6875 39.3125C32.875 41.5834 33.4166 42.7084 33.375 42.7084C29.9583 43.8542 27.3125 44.4167 25.5 44.4167C20.4583 44.4167 15.6458 42.4375 12.1041 38.875C9.94995 36.7275 8.34865 34.0896 7.43746 31.1875H4.66663V21.7084H6.93746C7.62546 18.3594 9.20724 15.2592 11.5149 12.7367C13.8226 10.2141 16.7702 8.36338 20.0448 7.38078C23.3194 6.39818 26.799 6.32039 30.1143 7.15567C33.4295 7.99095 36.4568 9.70814 38.875 12.125C41.5004 14.7401 43.2912 18.0752 44.0208 21.7084H46.3333V31.1875H46.2083L38.7916 38L27.75 36.75V33.2709H37.8125L39.5 31.25ZM19.8125 25.0209C20.4375 25.0209 21.0416 25.2709 21.4791 25.7292C21.9188 26.1725 22.1655 26.7715 22.1655 27.3959C22.1655 28.0202 21.9188 28.6193 21.4791 29.0625C21.0416 29.5 20.4375 29.75 19.8125 29.75C18.5 29.75 17.4375 28.7084 17.4375 27.3959C17.4375 26.0834 18.5 25.0209 19.8125 25.0209ZM31.1666 25.0209C32.4791 25.0209 33.5208 26.0834 33.5208 27.3959C33.5208 28.7084 32.4791 29.75 31.1666 29.75C29.8541 29.75 28.7916 28.7084 28.7916 27.3959C28.7916 26.766 29.0418 26.1619 29.4872 25.7165C29.9326 25.2711 30.5367 25.0209 31.1666 25.0209Z"
        className={fill}
      />
    </svg>
  );
};

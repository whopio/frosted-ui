import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13 17.4961C13.4141 17.4961 13.7498 17.832 13.75 18.2461C13.75 18.6603 13.4142 18.9961 13 18.9961H7C6.58579 18.9961 6.25 18.6603 6.25 18.2461C6.25016 17.832 6.58589 17.4961 7 17.4961H13ZM10 1C13.7279 1 16.75 4.02208 16.75 7.75C16.7499 9.69018 15.9296 11.4393 14.6201 12.6689C14.2203 13.0445 14.0001 13.4752 14 13.8809V14C13.9998 15.1044 13.1045 16 12 16H8C6.89553 16 6.00016 15.1044 6 14V13.8809C5.99992 13.4752 5.77968 13.0445 5.37988 12.6689C4.07042 11.4393 3.25009 9.69018 3.25 7.75C3.25 4.02208 6.27208 1 10 1Z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled20.category = 'Objects';

export default BulbBlankFilled20;

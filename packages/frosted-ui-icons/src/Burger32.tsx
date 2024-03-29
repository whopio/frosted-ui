import * as React from 'react';
import { IconProps } from './types';

export const Burger32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M28.25 18.1772C27.492 18.1617 26.6935 17.7991 26.2203 17.0892 25.2527 15.6379 23.1201 15.6379 22.1525 17.0892 21.1849 18.5406 19.0523 18.5406 18.0847 17.0892 17.1171 15.6379 14.9845 15.6379 14.0169 17.0892 13.0493 18.5406 10.9167 18.5406 9.9491 17.0892 8.98152 15.6379 6.84888 15.6379 5.8813 17.0892 5.38697 17.8307 4.54185 18.1934 3.75 18.1772M23.9322 27.7812H8.0678C5.8212 27.7812 4 26.085 4 23.8384 4 22.7151 4.91063 21.8045 6.0339 21.8045H25.9661C27.0894 21.8045 28 22.7151 28 23.8384 28 26.085 26.1788 27.7812 23.9322 27.7812zM25.9661 12.25H6.0339C4.91063 12.25 4 11.0374 4 9.9141 4 6.54423 6.73183 3.8124 10.1017 3.8124H21.8983C25.2682 3.8124 28 6.54423 28 9.9141 28 11.0374 27.0894 12.25 25.9661 12.25z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Burger32;

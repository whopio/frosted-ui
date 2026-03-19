import * as React from 'react';
import { IconProps } from './types';

export const HeartBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.5 2.12012C17.4756 2.12012 19.9998 4.39982 20 7.65332C20 11.1337 17.9866 13.7916 15.9141 15.6074C13.8331 17.4307 11.5581 18.5289 10.7207 18.9004C10.2581 19.1056 9.74186 19.1056 9.2793 18.9004C8.44193 18.5289 6.1669 17.4307 4.08594 15.6074C2.01343 13.7916 1.45284e-05 11.1337 0 7.65332C0.000193347 4.39982 2.52439 2.12012 5.5 2.12012C7.5807 2.12012 8.96021 3.00143 9.80469 3.9082C9.87358 3.98219 9.93839 4.05646 10 4.12988C10.0616 4.05646 10.1264 3.98219 10.1953 3.9082C11.0398 3.00143 12.4193 2.12012 14.5 2.12012Z"
        fill={color}
      />
    </svg>
  );
};

HeartBoldFilled20.category = 'Product Icons';

export default HeartBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const HeartBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23 3.87402C27.362 3.87402 30.9999 7.29405 31 12.1279C30.9999 17.432 28.019 21.5284 24.8525 24.3848C21.6804 27.2461 18.2013 28.977 16.9131 29.5654C16.3275 29.8329 15.6725 29.8329 15.0869 29.5654C13.7987 28.977 10.3196 27.2461 7.14746 24.3848C3.98096 21.5284 1.00007 17.432 1 12.1279C1.00008 7.29405 4.63797 3.87402 9 3.87402C11.977 3.87402 13.9785 5.2127 15.2139 6.54492C15.5214 6.87659 15.7824 7.20746 16 7.51758C16.2176 7.20746 16.4786 6.87659 16.7861 6.54492C18.0215 5.2127 20.023 3.87402 23 3.87402Z"
        fill={color}
      />
    </svg>
  );
};

HeartBoldFilled32.category = 'Product Icons';

export default HeartBoldFilled32;

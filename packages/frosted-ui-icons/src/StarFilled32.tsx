import * as React from 'react';
import { IconProps } from './types';

export const StarFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StarFilled32"
      {...props}
    >
      <path
        d="M14.323 2.783c.675-1.403 2.68-1.403 3.354 0v.001l3.462 7.205.048.074c.056.068.138.113.23.125l7.964 1.043c1.548.203 2.177 2.11 1.036 3.187l-5.823 5.49c-.088.083-.127.204-.106.32l1.463 7.844c.288 1.54-1.344 2.709-2.713 1.971l-7.066-3.809c-.107-.058-.238-.058-.345 0h.001l-7.066 3.809c-1.368.738-3-.43-2.713-1.97l1.463-7.845c.016-.087-.002-.177-.049-.251l-.057-.069-5.823-5.49c-1.141-1.077-.512-2.984 1.036-3.187l7.965-1.043c.122-.016.226-.091.278-.199l3.461-7.206z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled32.category = 'Interface General';

export default StarFilled32;

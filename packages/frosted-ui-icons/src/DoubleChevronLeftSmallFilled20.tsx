import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.1303 6.71703C10.6184 6.229 10.6182 5.43767 10.1303 4.94945C9.64229 4.46138 8.85097 4.4615 8.36275 4.94945L4.48873 8.82054C3.83748 9.47149 3.83745 10.528 4.48873 11.1789L8.36275 15.05C8.85095 15.5379 9.6423 15.538 10.1303 15.05C10.6183 14.5618 10.6183 13.7705 10.1303 13.2825L6.84615 10.0002L10.1303 6.71703ZM15.6333 6.71703C16.1213 6.22899 16.1212 5.43766 15.6333 4.94945C15.1452 4.46138 14.3539 4.4615 13.8657 4.94945L9.99166 8.82054C9.34039 9.47149 9.34037 10.528 9.99166 11.1789L13.8657 15.05C14.3539 15.538 15.1452 15.5381 15.6333 15.05C16.1212 14.5618 16.1213 13.7705 15.6333 13.2825L12.3491 10.0002L15.6333 6.71703Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallFilled20.category = 'Arrows';

export default DoubleChevronLeftSmallFilled20;

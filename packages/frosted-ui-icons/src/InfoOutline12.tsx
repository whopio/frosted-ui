import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 3.00403C6.55228 3.00403 7 2.55631 7 2.00403C7 1.45174 6.55228 1.00403 6 1.00403C5.44772 1.00403 5 1.45174 5 2.00403C5 2.55631 5.44772 3.00403 6 3.00403ZM3 4.75C3 4.33579 3.33579 4 3.75 4H6C6.41421 4 6.75 4.33579 6.75 4.75V9.49988H8.2499C8.66411 9.49988 8.9999 9.83566 8.9999 10.2499C8.9999 10.6641 8.66411 10.9999 8.2499 10.9999H6.00592L6 10.9999L5.99408 10.9999H3.75C3.33579 10.9999 3 10.6641 3 10.2499C3 9.83566 3.33579 9.49988 3.75 9.49988H5.25V5.5H3.75C3.33579 5.5 3 5.16421 3 4.75Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default InfoOutline12;

import * as React from 'react';
import { IconProps } from './types';

export const InfoOutline12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 4C6.41421 4 6.75 4.33579 6.75 4.75V9.5H8.25C8.66417 9.50005 9 9.83582 9 10.25C8.99987 10.6641 8.66409 10.9999 8.25 11H3.75C3.33587 11 3.00013 10.6641 3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H5.25V5.5H3.75C3.33583 5.5 3.00007 5.16416 3 4.75C3 4.33579 3.33579 4 3.75 4H6ZM6 1.00391C6.55228 1.00391 7 1.45162 7 2.00391C7 2.55619 6.55228 3.00391 6 3.00391C5.44772 3.00391 5 2.55619 5 2.00391C5 1.45162 5.44772 1.00391 6 1.00391Z"
        fill={color}
      />
    </svg>
  );
};

InfoOutline12.category = 'Interface General';

export default InfoOutline12;

import * as React from 'react';
import { IconProps } from './types';

export const InfoCircle16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.25 7C8.66421 7 9 7.33579 9 7.75V10.5H9.5C9.91421 10.5 10.25 10.8358 10.25 11.25C10.2499 11.6642 9.91417 12 9.5 12H6.5C6.08583 12 5.75007 11.6642 5.75 11.25C5.75 10.8358 6.08579 10.5 6.5 10.5H7.5V8.5H6.5C6.08579 8.5 5.75 8.16421 5.75 7.75C5.75 7.33579 6.08579 7 6.5 7H8.25ZM8 4.00391C8.55224 4.00391 8.99993 4.45168 9 5.00391C9 5.55619 8.55228 6.00391 8 6.00391C7.44772 6.00391 7 5.55619 7 5.00391C7.00007 4.45168 7.44776 4.00391 8 4.00391Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

InfoCircle16.category = 'Interface General';

export default InfoCircle16;

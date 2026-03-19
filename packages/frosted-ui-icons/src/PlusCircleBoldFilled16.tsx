import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.96875 3.75C7.14032 3.75 6.46875 4.42157 6.46875 5.25V6.46875H5.25C4.42157 6.46875 3.75 7.14032 3.75 7.96875C3.75 8.79718 4.42157 9.46875 5.25 9.46875H6.46875V10.6875C6.46875 11.5159 7.14032 12.1875 7.96875 12.1875C8.79718 12.1875 9.46875 11.5159 9.46875 10.6875V9.46875H10.6875C11.5159 9.46875 12.1875 8.79718 12.1875 7.96875C12.1875 7.14032 11.5159 6.46875 10.6875 6.46875H9.46875V5.25C9.46875 4.42157 8.79718 3.75 7.96875 3.75Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleBoldFilled16.category = 'Product Icons';

export default PlusCircleBoldFilled16;

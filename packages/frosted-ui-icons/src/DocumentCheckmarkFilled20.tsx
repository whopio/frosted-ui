import * as React from 'react';
import { IconProps } from './types';

export const DocumentCheckmarkFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentCheckmarkFilled20"
      {...props}
    >
      <path
        d="M9.97 12.97c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-5.75 5.75c-.293.293-.767.293-1.06 0l-2.5-2.5c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l1.97 1.97 5.22-5.22zM6.216 0C8.409.019 10.182 1.802 10.182 4v.448c0 2.071 1.679 3.75 3.75 3.75h.568c2.209 0 4 1.791 4 4v2.077h.003v.975c0 2.623-2.127 4.75-4.75 4.75H7.182l4.909-4.91c.879-.878.879-2.302 0-3.18-.879-.88-2.303-.88-3.182 0L4.75 16.067l-.91-.909c-.632-.633-1.548-.808-2.34-.528V4.75C1.5 2.138 3.608.02 6.216.001zm3.742.002c.34.009.676.062 1.001.161l.126.038c3.47 1.06 6.17 3.8 7.182 7.283l.087.301c.058.2.096.406.12.613-1-1.047-2.41-1.7-3.974-1.7h-.568c-1.243-.001-2.25-1.008-2.25-2.25V4c0-1.575-.663-2.994-1.724-3.997z"
        fill={color}
      />
    </svg>
  );
};

DocumentCheckmarkFilled20.category = 'Interface General';

export default DocumentCheckmarkFilled20;

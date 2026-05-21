import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 5.5C5.58579 5.5 5.25 5.83579 5.25 6.25V8.25C5.25005 8.66417 5.58582 9 6 9C6.41418 9 6.74995 8.66417 6.75 8.25V6.25C6.75 5.83579 6.41421 5.5 6 5.5ZM6 2.75C5.50294 2.75 5.09961 3.15333 5.09961 3.65039C5.09982 4.14727 5.50307 4.5498 6 4.5498C6.49693 4.5498 6.90018 4.14727 6.90039 3.65039C6.90039 3.15333 6.49706 2.75 6 2.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled12.category = 'Interface General';

export default InfoCircleFilled12;

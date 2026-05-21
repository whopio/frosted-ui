import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 0C10.3211 0 12 1.67893 12 3.75V8.25C12 10.3211 10.3211 12 8.25 12H3.75C1.67893 12 0 10.3211 0 8.25V3.75C0 1.67893 1.67893 1.28851e-07 3.75 0H8.25ZM3.75 1.5C2.50736 1.5 1.5 2.50736 1.5 3.75V8.25C1.5 9.49264 2.50736 10.5 3.75 10.5H8.25C9.49264 10.5 10.5 9.49264 10.5 8.25V3.75C10.5 2.50736 9.49264 1.5 8.25 1.5H3.75ZM6 5.5C6.41421 5.5 6.75 5.83579 6.75 6.25V8.25C6.74995 8.66417 6.41418 9 6 9C5.58582 9 5.25005 8.66417 5.25 8.25V6.25C5.25 5.83579 5.58579 5.5 6 5.5ZM6 2.75C6.49706 2.75 6.90039 3.15333 6.90039 3.65039C6.90018 4.14727 6.49693 4.5498 6 4.5498C5.50307 4.5498 5.09982 4.14727 5.09961 3.65039C5.09961 3.15333 5.50294 2.75 6 2.75Z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare12.category = 'Interface General';

export default InfoSquare12;

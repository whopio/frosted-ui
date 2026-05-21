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
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM7.99707 7.25C8.41128 7.25 8.74707 7.58579 8.74707 8V11.25C8.74707 11.6642 8.41128 12 7.99707 12C7.58286 12 7.24707 11.6642 7.24707 11.25V8C7.24707 7.58579 7.58286 7.25 7.99707 7.25ZM8 4C8.55229 4 9 4.44772 9 5C9 5.55228 8.55229 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircle16.category = 'Interface General';

export default InfoCircle16;

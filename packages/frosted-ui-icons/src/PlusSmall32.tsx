import * as React from 'react';
import { IconProps } from './types';

export const PlusSmall32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 7C16.4142 7 16.75 7.33579 16.75 7.75V15.25H24.25C24.6642 15.25 25 15.5858 25 16C25 16.4142 24.6642 16.75 24.25 16.75H16.75V24.25C16.75 24.6642 16.4142 25 16 25C15.5858 25 15.25 24.6642 15.25 24.25V16.75H7.75C7.33579 16.75 7 16.4142 7 16C7 15.5858 7.33579 15.25 7.75 15.25H15.25V7.75C15.25 7.33579 15.5858 7 16 7Z"
        fill={color}
      />
    </svg>
  );
};

PlusSmall32.category = 'Interface General';

export default PlusSmall32;

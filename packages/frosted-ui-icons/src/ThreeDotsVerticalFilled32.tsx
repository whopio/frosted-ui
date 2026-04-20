import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVerticalFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.248 26.165C13.2482 24.6465 14.4795 23.4152 15.998 23.415C17.5166 23.4152 18.7478 24.6465 18.748 26.165C18.7479 27.6836 17.5166 28.9149 15.998 28.915C14.4795 28.9149 13.2482 27.6836 13.248 26.165ZM13.248 15.999C13.248 14.4803 14.4794 13.2492 15.998 13.249C17.5167 13.2492 18.748 14.4803 18.748 15.999C18.7477 17.5174 17.5165 18.7488 15.998 18.749C14.4796 18.7488 13.2484 17.5174 13.248 15.999ZM13.248 5.83496C13.2483 4.31651 14.4796 3.08514 15.998 3.08496C17.5165 3.08514 18.7478 4.31651 18.748 5.83496C18.7479 7.35348 17.5166 8.58478 15.998 8.58496C14.4795 8.58479 13.2482 7.35349 13.248 5.83496Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsVerticalFilled32.category = 'Interface General';

export default ThreeDotsVerticalFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const TagFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TagFilled32"
      {...props}
    >
      <path
        d="M26.251 1C28.8743 1 31.001 3.12665 31.001 5.75V14.3379C31.0008 16.1277 30.2899 17.8447 29.0244 19.1104L19.0225 29.1113C16.7769 31.3563 13.136 31.3567 10.8906 29.1113L2.88867 21.1094C0.643593 18.8639 0.64457 15.223 2.88965 12.9775L12.8906 2.97656C14.1563 1.71107 15.8733 1.00018 17.6631 1H26.251ZM22 6.25C19.9289 6.25 18.25 7.92893 18.25 10C18.25 12.0711 19.9289 13.75 22 13.75C24.0711 13.75 25.75 12.0711 25.75 10C25.75 7.92893 24.0711 6.25 22 6.25Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled32.category = 'Interface General';

export default TagFilled32;

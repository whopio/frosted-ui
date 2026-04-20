import * as React from 'react';
import { IconProps } from './types';

export const GridBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.25 17C13.3211 17 15 18.6789 15 20.75V27.25C15 29.3211 13.3211 31 11.25 31H4.75C2.67893 31 1 29.3211 1 27.25V20.75C1 18.6789 2.67893 17 4.75 17H11.25ZM27.25 17C29.3211 17 31 18.6789 31 20.75V27.25C31 29.3211 29.3211 31 27.25 31H20.75C18.6789 31 17 29.3211 17 27.25V20.75C17 18.6789 18.6789 17 20.75 17H27.25ZM11.25 1C13.3211 1 15 2.67893 15 4.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1 2.67893 2.67893 1 4.75 1H11.25ZM27.25 1C29.3211 1 31 2.67893 31 4.75V11.25C31 13.3211 29.3211 15 27.25 15H20.75C18.6789 15 17 13.3211 17 11.25V4.75C17 2.67893 18.6789 1 20.75 1H27.25Z"
        fill={color}
      />
    </svg>
  );
};

GridBoldFilled32.category = 'Interface General';

export default GridBoldFilled32;

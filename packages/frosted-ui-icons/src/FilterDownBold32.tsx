import * as React from 'react';
import { IconProps } from './types';

export const FilterDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.25 24C19.8023 24 20.25 24.4477 20.25 25C20.25 25.5523 19.8023 26 19.25 26H12.75C12.1977 26 11.75 25.5523 11.75 25C11.75 24.4477 12.1977 24 12.75 24H19.25ZM23.25 15C23.8023 15 24.25 15.4477 24.25 16C24.25 16.5523 23.8023 17 23.25 17H8.75C8.19772 17 7.75 16.5523 7.75 16C7.75 15.4477 8.19772 15 8.75 15H23.25ZM27.25 6C27.8023 6 28.25 6.44772 28.25 7C28.25 7.55228 27.8023 8 27.25 8H4.75C4.19772 8 3.75 7.55228 3.75 7C3.75 6.44772 4.19772 6 4.75 6H27.25Z"
        fill={color}
      />
    </svg>
  );
};

FilterDownBold32.category = 'Text Formatting';

export default FilterDownBold32;

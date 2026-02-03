import * as React from 'react';
import { IconProps } from './types';

export const Italic20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.04 2.375C16.4543 2.375 16.79 2.71079 16.79 3.125C16.79 3.53921 16.4543 3.875 16.04 3.875H12.6387L8.92578 16.125H11.8818C12.296 16.125 12.6318 16.4608 12.6318 16.875C12.6318 17.2892 12.296 17.625 11.8818 17.625H3.95703C3.54299 17.6248 3.20703 17.2891 3.20703 16.875C3.20703 16.4609 3.54299 16.1252 3.95703 16.125H7.3584L11.0713 3.875H8.12402C7.70998 3.8748 7.37402 3.53909 7.37402 3.125C7.37402 2.71091 7.70998 2.3752 8.12402 2.375H16.04Z"
        fill={color}
      />
    </svg>
  );
};

Italic20.category = 'Text Formatting';

export default Italic20;

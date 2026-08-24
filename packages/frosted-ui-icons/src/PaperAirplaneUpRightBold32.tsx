import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBold32"
      {...props}
    >
      <path
        d="M25.166 1.206c3.48-1.107 6.76 2.173 5.652 5.653l-6.917 21.735c-1.32 4.148-7.175 4.192-8.557.064l-2.75-8.217c-.158-.475-.532-.849-1.007-1.008L3.362 16.68c-4.127-1.383-4.082-7.236.065-8.556l21.739-6.917zm3.747 5.046c.615-1.933-1.208-3.755-3.14-3.14l-21.74 6.917c-2.304.733-2.328 3.985-.036 4.753l8.225 2.755c.206.069.403.156.59.258l5.582-5.581c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414l-5.58 5.58c.105.189.193.389.263.597l2.75 8.218c.767 2.294 4.02 2.27 4.754-.035l6.918-21.736z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBold32.category = 'Communication';

export default PaperAirplaneUpRightBold32;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBoldFilled32"
      {...props}
    >
      <path
        d="M25.166 1.206c3.48-1.107 6.76 2.173 5.652 5.653l-6.917 21.735c-1.32 4.148-7.175 4.192-8.557.064l-2.649-7.918 7.113-7.112c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0l-7.115 7.115-7.917-2.65c-4.127-1.383-4.082-7.236.065-8.556l21.739-6.917z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRightBoldFilled32.category = 'Communication';

export default PaperAirplaneUpRightBoldFilled32;

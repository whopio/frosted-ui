import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBoldFilled16"
      {...props}
    >
      <path
        d="M5.913 2.27c.877-1.689 3.295-1.689 4.172 0l4.607 8.875c1.14 2.194-1.1 4.607-3.374 3.635l-2.316-.992V8.736c0-.552-.448-1-1-1s-1 .448-1 1v5.05l-2.324.995c-2.273.972-4.513-1.442-3.373-3.636L5.913 2.27z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled16.category = 'Communication';

export default PaperAirplaneUpBoldFilled16;

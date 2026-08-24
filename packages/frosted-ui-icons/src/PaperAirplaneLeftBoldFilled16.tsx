import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBoldFilled16"
      {...props}
    >
      <path
        d="M2.266 10.088c-1.69-.877-1.69-3.295 0-4.172L11.14 1.31c2.194-1.139 4.607 1.1 3.634 3.374l-.992 2.316H8.732c-.553 0-1 .448-1 1s.447 1 1 1h5.05l.995 2.324c.972 2.274-1.442 4.513-3.636 3.373l-8.875-4.608z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled16.category = 'Communication';

export default PaperAirplaneLeftBoldFilled16;

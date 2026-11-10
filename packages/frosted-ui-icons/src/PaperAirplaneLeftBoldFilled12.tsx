import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBoldFilled12"
      {...props}
    >
      <path
        d="M1.326 8.67c-1.768-.905-1.768-3.433 0-4.338L9.206.297c2.14-1.096 4.494 1.053 3.596 3.285l-.74 1.835H7.31c-.598 0-1.083.485-1.083 1.083s.485 1.083 1.083 1.083h4.754l.74 1.838c.898 2.23-1.456 4.38-3.596 3.284L1.327 8.67z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled12.category = 'Communication';

export default PaperAirplaneLeftBoldFilled12;

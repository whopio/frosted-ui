import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBoldFilled32"
      {...props}
    >
      <path
        d="M3.105 19.456C.3 18.005.3 13.99 3.105 12.54L24.41 1.523c3.867-2 8.038 2.11 6.096 6.005L26.779 15H16.721c-.552 0-1 .448-1 1s.447 1 1 1h10.062l3.724 7.471c1.941 3.897-2.23 8.004-6.096 6.004L3.105 19.455z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled32.category = 'Communication';

export default PaperAirplaneLeftBoldFilled32;

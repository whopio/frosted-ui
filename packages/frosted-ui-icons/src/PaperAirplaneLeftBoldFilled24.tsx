import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneLeftBoldFilled24"
      {...props}
    >
      <path
        d="M2.687 14.77C.44 13.608.44 10.393 2.688 9.229L17.78 1.416c3.035-1.57 6.328 1.613 4.86 4.7L20.317 11h-7.554c-.553 0-1 .448-1 1s.447 1 1 1h7.557l2.324 4.886c1.466 3.086-1.827 6.27-4.862 4.7L2.687 14.77z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneLeftBoldFilled24.category = 'Communication';

export default PaperAirplaneLeftBoldFilled24;

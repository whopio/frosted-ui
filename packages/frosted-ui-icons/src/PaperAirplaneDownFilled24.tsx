import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.45098 21.444C10.5214 23.5136 13.4814 23.5137 14.5516 21.444L22.6131 5.85318C24.0852 3.00577 21.0632 -0.0666275 18.1922 1.35904L12.7498 4.06216V11.2428C12.7498 11.6569 12.4138 11.9926 11.9998 11.9928C11.5856 11.9928 11.2498 11.657 11.2498 11.2428V4.05825L5.80645 1.35708C2.93552 -0.0675278 -0.0861866 3.00432 1.38555 5.85122L9.45098 21.444Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownFilled24.category = 'Communication';

export default PaperAirplaneDownFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const PianoFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PianoFilled24"
      {...props}
    >
      <path
        d="M17.5 0C21.09 0 24 2.91 24 6.5v11c0 3.59-2.911 6.5-6.5 6.5h-11C2.91 24 0 21.09-.001 17.5v-11c0-3.59 2.911-6.5 6.5-6.5h11zm-7 11.5c0 1.21-.86 2.217-2 2.45v8.55h7v-8.55c-1.141-.232-2-1.24-2-2.45v-10h-3v10zm8.5 0c0 1.21-.86 2.217-2 2.45v8.55h.5c2.76 0 5-2.239 5-5v-11c0-2.238-1.472-4.134-3.5-4.771V11.5zM5 1.73C2.97 2.366 1.5 4.261 1.5 6.5v11c0 2.761 2.239 5 5 5H7v-8.55c-1.141-.232-2-1.24-2-2.45V1.73z"
        fill={color}
      />
    </svg>
  );
};

PianoFilled24.category = 'Sound & Music';

export default PianoFilled24;

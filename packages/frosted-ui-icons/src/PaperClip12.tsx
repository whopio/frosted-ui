import * as React from 'react';
import { IconProps } from './types';

export const PaperClip12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperClip12"
      {...props}
    >
      <path
        d="M2.25 5.747V7.5c0 2.071 1.679 3.75 3.75 3.75 2.071 0 3.75-1.679 3.75-3.75V3.25c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V7.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V3.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PaperClip12.category = 'Objects';

export default PaperClip12;

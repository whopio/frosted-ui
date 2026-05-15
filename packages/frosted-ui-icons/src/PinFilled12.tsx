import * as React from 'react';
import { IconProps } from './types';

export const PinFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.25005 0C8.21655 0 9.00005 0.783502 9.00005 1.75V4.16797C9.00011 4.24939 9.02262 4.32959 9.0645 4.39941L10.2344 6.34961C10.9343 7.51603 10.0937 9 8.73345 9H6.75005V11.25C6.75005 11.6642 6.41425 12 6.00005 12C5.58587 12 5.25005 11.6642 5.25005 11.25V9H3.26665C1.90645 8.99994 1.06588 7.516 1.76568 6.34961L2.9356 4.39941C2.9775 4.32958 2.99999 4.24941 3.00005 4.16797V1.75C3.00005 0.783529 3.78359 4.39982e-05 4.75005 0H7.25005Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled12.category = 'Interface General';

export default PinFilled12;

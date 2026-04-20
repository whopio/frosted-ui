import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.31112 17.6165L10.0405 3.41436C10.9098 1.8171 13.2047 1.82229 14.0668 3.42347L21.713 17.6256C22.5341 19.1507 21.4295 21 19.6975 21H4.32177C2.58512 21 1.48095 19.1419 2.31112 17.6165Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBoldFilled24.category = 'Interface General';

export default TriangleBoldFilled24;

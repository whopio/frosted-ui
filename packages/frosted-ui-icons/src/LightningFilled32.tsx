import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M21.2303 1C22.1708 1.00027 22.7954 1.97475 22.4022 2.8291L18.41 11.5H24.8553C25.9452 11.5007 26.543 12.7694 25.8495 13.6104L11.8339 30.6006C11.1476 31.4324 9.80389 30.8132 9.99011 29.751L12.0497 18H6.7323C5.86373 18 5.2432 17.1589 5.49988 16.3291L9.88172 2.16211C10.0955 1.47122 10.7347 1.00003 11.4579 1H21.2303Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFilled32.category = 'Nature & Weather';

export default LightningFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const PauseFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseFilled24"
      {...props}
    >
      <path
        d="M7 2.5c1.105 0 2 .896 2 2v15c0 1.104-.895 2-2 2H5c-1.105 0-2-.896-2-2v-15c0-1.104.895-2 2-2h2zm12 0c1.105 0 2 .896 2 2v15c0 1.104-.895 2-2 2h-2c-1.105 0-2-.896-2-2v-15c0-1.104.895-2 2-2h2z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PauseFilled24.category = 'Sound & Music';

export default PauseFilled24;

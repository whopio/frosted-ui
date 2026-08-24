import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallFilled24"
      {...props}
    >
      <path
        d="M12 5c.69 0 1.25.56 1.25 1.25v4.5h4.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-4.5v4.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-4.5h-4.5C5.56 13.25 5 12.69 5 12s.56-1.25 1.25-1.25h4.5v-4.5c0-.69.56-1.25 1.25-1.25z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallFilled24.category = 'Interface General';

export default PlusSmallFilled24;

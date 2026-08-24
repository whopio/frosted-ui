import * as React from 'react';
import { IconProps } from './types';

export const Venmo24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Venmo24"
      {...props}
    >
      <path
        d="M21.559.776c.08-.016.162.02.204.09.797 1.314 1.157 2.676 1.157 4.383 0 5.579-4.905 12.817-8.915 17.926-.038.048-.094.075-.155.075H4.93c-.097 0-.179-.07-.195-.164L1.117 2.188c-.02-.114.061-.22.176-.23l7.638-.7c.106-.01.2.065.214.17L11 15.837c.023.183.261.236.358.079 1.76-2.868 3.776-7.061 3.776-9.969 0-1.542-.251-2.633-.653-3.53-.053-.12.015-.259.143-.284L21.56.776z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Venmo24.category = 'Social & Brands';

export default Venmo24;

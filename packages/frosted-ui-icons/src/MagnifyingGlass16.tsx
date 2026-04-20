import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.00098 1.00098C10.3145 1.00098 13.0007 3.68749 13.001 7.00098C13.001 8.38747 12.53 9.66369 11.7402 10.6797L14.7803 13.7197C15.073 14.0126 15.0731 14.4874 14.7803 14.7803C14.4874 15.0731 14.0126 15.073 13.7197 14.7803L10.6797 11.7402C9.66369 12.53 8.38747 13.001 7.00098 13.001C3.68749 13.0007 1.00098 10.3145 1.00098 7.00098C1.00124 3.68765 3.68765 1.00124 7.00098 1.00098ZM7.00098 2.50098C4.51608 2.50124 2.50124 4.51608 2.50098 7.00098C2.50098 9.4861 4.51592 11.5007 7.00098 11.501C9.48626 11.501 11.501 9.48626 11.501 7.00098C11.5007 4.51592 9.4861 2.50098 7.00098 2.50098Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlass16.category = 'Interface General';

export default MagnifyingGlass16;

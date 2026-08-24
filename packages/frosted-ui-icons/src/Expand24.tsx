import * as React from 'react';
import { IconProps } from './types';

export const Expand24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Expand24"
      {...props}
    >
      <path
        d="M8.97 13.97c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L3.56 21.5H9.5c.414 0 .75.336.75.75s-.336.75-.75.75H1.75c-.414 0-.75-.336-.75-.75V14.5c0-.414.336-.75.75-.75s.75.336.75.75v5.94l6.47-6.47zM22.25 1c.414 0 .75.336.75.75V9.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.56l-6.47 6.47c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l6.47-6.47H14.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.75z"
        fill={color}
      />
    </svg>
  );
};

Expand24.category = 'Arrows';

export default Expand24;

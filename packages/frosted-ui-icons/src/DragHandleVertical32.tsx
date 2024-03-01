import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVertical32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="11" cy="25" r="1.25" fill={color} />
        <circle cx="11" cy="16" r="1.25" fill={color} />
        <circle cx="11" cy="7" r="1.25" fill={color} />
        <circle cx="21" cy="25" r="1.25" fill={color} />
        <circle cx="21" cy="16" r="1.25" fill={color} />
        <circle cx="21" cy="7" r="1.25" fill={color} />
      </svg>
    );
  },
);

export default DragHandleVertical32;

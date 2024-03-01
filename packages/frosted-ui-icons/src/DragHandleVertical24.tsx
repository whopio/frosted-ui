import * as React from 'react';
import { IconProps } from './types';

export const DragHandleVertical24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="8.25" cy="4.25" r="1.25" fill={color} />
        <circle cx="8.25" cy="12.25" r="1.25" fill={color} />
        <circle cx="8.25" cy="20.25" r="1.25" fill={color} />
        <circle cx="15.75" cy="4.25" r="1.25" fill={color} />
        <circle cx="15.75" cy="12.25" r="1.25" fill={color} />
        <circle cx="15.75" cy="20.25" r="1.25" fill={color} />
      </svg>
    );
  },
);

export default DragHandleVertical24;

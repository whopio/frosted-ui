import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal12 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <circle cx="2" cy="8" r="1" transform="rotate(-90 2 8)" fill={color} />
      <circle cx="2" cy="4" r="1" transform="rotate(-90 2 4)" fill={color} />
      <circle cx="6" cy="8" r="1" transform="rotate(-90 6 8)" fill={color} />
      <circle cx="6" cy="4" r="1" transform="rotate(-90 6 4)" fill={color} />
      <circle cx="10" cy="8" r="1" transform="rotate(-90 10 8)" fill={color} />
      <circle cx="10" cy="4" r="1" transform="rotate(-90 10 4)" fill={color} />
    </svg>
  );
});

export default DragHandleHorizontal12;

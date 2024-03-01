import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal20 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
      ref={forwardedRef}
    >
      <circle cx="4" cy="13" r="1" transform="rotate(-90 4 13)" fill={color} />
      <circle cx="4" cy="7" r="1" transform="rotate(-90 4 7)" fill={color} />
      <circle
        cx="10"
        cy="13"
        r="1"
        transform="rotate(-90 10 13)"
        fill={color}
      />
      <circle cx="10" cy="7" r="1" transform="rotate(-90 10 7)" fill={color} />
      <circle
        cx="16"
        cy="13"
        r="1"
        transform="rotate(-90 16 13)"
        fill={color}
      />
      <circle cx="16" cy="7" r="1" transform="rotate(-90 16 7)" fill={color} />
    </svg>
  );
});

export default DragHandleHorizontal20;

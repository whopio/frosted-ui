import * as React from 'react';
import { IconProps } from './types';

export const DragHandleHorizontal32 = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <circle
        cx="25"
        cy="21"
        r="1.25"
        transform="rotate(-90 25 21)"
        fill={color}
      />
      <circle
        cx="16"
        cy="21"
        r="1.25"
        transform="rotate(-90 16 21)"
        fill={color}
      />
      <circle
        cx="7"
        cy="21"
        r="1.25"
        transform="rotate(-90 7 21)"
        fill={color}
      />
      <circle
        cx="25"
        cy="11"
        r="1.25"
        transform="rotate(-90 25 11)"
        fill={color}
      />
      <circle
        cx="16"
        cy="11"
        r="1.25"
        transform="rotate(-90 16 11)"
        fill={color}
      />
      <circle
        cx="7"
        cy="11"
        r="1.25"
        transform="rotate(-90 7 11)"
        fill={color}
      />
    </svg>
  );
});

export default DragHandleHorizontal32;

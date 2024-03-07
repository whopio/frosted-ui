import * as React from 'react';
import { IconProps } from './types';

export const AlignLeft20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
        <path
          d="M2.33112 2.42877H9.70645M2.33112 7.22137H17.0818M2.33112 16.8065H17.0818M2.33112 12.0139H9.70645"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default AlignLeft20;

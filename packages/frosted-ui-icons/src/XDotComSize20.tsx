import * as React from 'react';
import { IconProps } from './types';

export const XDotComSize20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5028 2.91667H16.9043L11.6575 8.91751L17.83 17.0833H12.997L9.21167 12.1308L4.88031 17.0833H2.47724L8.08924 10.6648L2.16797 2.91667H7.12366L10.5453 7.44346L14.5028 2.91667ZM13.6598 15.6448H14.9906L6.40056 4.27958H4.97252L13.6598 15.6448Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotComSize20;

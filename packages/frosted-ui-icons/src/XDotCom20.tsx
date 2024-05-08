import * as React from 'react';
import { IconProps } from './types';

export const XDotCom20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5028 2.91669H16.9043L11.6575 8.91752L17.83 17.0834H12.997L9.21167 12.1309L4.88031 17.0834H2.47724L8.08924 10.6648L2.16797 2.91669H7.12366L10.5453 7.44348L14.5028 2.91669ZM13.6598 15.6449H14.9906L6.40056 4.2796H4.97252L13.6598 15.6449Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotCom20;

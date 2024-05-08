import * as React from 'react';
import { IconProps } from './types';

export const XDotCom16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M11.6022 2.33331H13.5235L9.326 7.13398L14.264 13.6666H10.3976L7.36934 9.70465L3.90425 13.6666H1.98179L6.4714 8.53178L1.73438 2.33331H5.69893L8.43627 5.95475L11.6022 2.33331ZM10.9279 12.5158H11.9925L5.12045 3.42364H3.97801L10.9279 12.5158Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotCom16;

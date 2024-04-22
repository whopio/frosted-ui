import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.6482 5.71755C14.4393 4.71343 13.5658 2.29163 10.0014 2.29163C6.5755 2.29163 5.29079 4.51947 5.29079 6.14579C5.29079 8.67721 7.62879 9.33813 10.0014 9.97138M4.97398 14.2824C5.29452 15.2865 6.43707 17.7083 10.0014 17.7083C13.4274 17.7083 14.9262 15.4805 14.9262 13.8541C14.9262 13.2276 14.783 12.7158 14.5315 12.2905M2.29169 9.99996H17.7084"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough20;

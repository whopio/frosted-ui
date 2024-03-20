import * as React from 'react';
import { IconProps } from './types';

export const Item24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M3.83996 17.6795L10.5894 21.8494C11.0133 22.1113 11.5017 22.25 12 22.25 12.4983 22.25 12.9867 22.1113 13.4106 21.8494L20.16 17.6795C20.8376 17.2609 21.25 16.5213 21.25 15.7249V8.2751C21.25 7.47869 20.8376 6.73909 20.16 6.3205L13.4106 2.15061C12.9867 1.88872 12.4983 1.75 12 1.75 11.5017 1.75 11.0133 1.88872 10.5894 2.15061L3.83996 6.3205C3.16243 6.73909 2.75 7.47869 2.75 8.2751V15.7249C2.75 16.5213 3.16243 17.2609 3.83996 17.6795zM11.9929 11.7571V18.1299M12.0005 11.7571L17.3807 8.84543M11.9929 11.7571L6.61282 8.84543"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Item24;

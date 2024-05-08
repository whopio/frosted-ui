import * as React from 'react';
import { IconProps } from './types';

export const Trophy20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 1C4.17157 1 3.5 1.67157 3.5 2.5V3H2.01214C0.900864 3 0 3.90087 0 5.01214V6.47573C0 8.28406 1.46594 9.75 3.27427 9.75H3.67393C4.29521 12.3801 6.51426 14.3929 9.24997 14.7072V17.5H6.75C6.33579 17.5 6 17.8358 6 18.25C6 18.6642 6.33579 19 6.75 19H13.25C13.6642 19 14 18.6642 14 18.25C14 17.8358 13.6642 17.5 13.25 17.5H10.75V14.7072C13.4857 14.3929 15.7048 12.3801 16.3261 9.75H16.7257C18.5341 9.75 20 8.28406 20 6.47573V5.01214C20 3.90087 19.0991 3 17.9879 3H16.5V2.5C16.5 1.67157 15.8284 1 15 1H5ZM1.5 6.47573C1.5 7.45563 2.29437 8.25 3.27427 8.25H3.5V4.5H2.01214C1.72929 4.5 1.5 4.72929 1.5 5.01214V6.47573ZM15 2.5L5 2.5V8.25C5 11.0114 7.23855 13.25 9.99997 13.25C12.7614 13.25 15 11.0114 15 8.25V2.5ZM18.5 6.47573C18.5 7.45563 17.7056 8.25 16.7257 8.25H16.5V4.5H17.9879C18.2707 4.5 18.5 4.72929 18.5 5.01214V6.47573Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Trophy20;

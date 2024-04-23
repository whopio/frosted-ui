import * as React from 'react';
import { IconProps } from './types';

export const Reply12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
        <path
          d="M5.49501 2.27938V3.98066C5.49501 3.98622 5.49954 3.99071 5.5051 3.99067C7.38886 3.97617 9.28232 4.3255 9.86378 5.9815C10.4463 7.64045 8.99003 9.6312 8.69878 9.96299C8.40753 10.2948 8.69878 8.30404 8.11627 7.64045C7.53545 6.97879 6.66506 6.97688 5.50509 6.97687C5.49956 6.97687 5.49501 6.98135 5.49501 6.98687V8.35645C5.49501 8.46186 5.36884 8.51605 5.29239 8.44348L2.09167 5.40494C2.04183 5.35763 2.04183 5.2782 2.09167 5.23088L5.29239 2.19235C5.36884 2.11978 5.49501 2.17397 5.49501 2.27938Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Reply12;
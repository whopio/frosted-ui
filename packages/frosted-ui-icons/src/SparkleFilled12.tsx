import * as React from 'react';
import { IconProps } from './types';

export const SparkleFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.17885 4.34019L6.4394 2.06904C6.37745 1.87878 6.20009 1.75 6 1.75C5.79991 1.75 5.62254 1.87878 5.5606 2.06904L4.82115 4.34019C4.74692 4.56817 4.56817 4.74692 4.34019 4.82115L2.06904 5.5606C1.87878 5.62255 1.75 5.79991 1.75 6C1.75 6.20009 1.87878 6.37745 2.06904 6.4394L4.34019 7.17885C4.56817 7.25308 4.74692 7.43183 4.82115 7.65981L5.5606 9.93096C5.62255 10.1212 5.79991 10.25 6 10.25C6.20009 10.25 6.37745 10.1212 6.4394 9.93096L7.17885 7.65981C7.25308 7.43183 7.43183 7.25308 7.65981 7.17885L9.93096 6.4394C10.1212 6.37745 10.25 6.20009 10.25 6C10.25 5.79991 10.1212 5.62254 9.93096 5.5606L7.65981 4.82115C7.43183 4.74692 7.25308 4.56817 7.17885 4.34019Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SparkleFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const ReplyFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.49501 2.27938V3.78906C5.49501 3.90018 5.5856 3.98982 5.69671 3.99048C7.51577 4.00136 9.30203 4.38165 9.86378 5.9815C10.4463 7.64045 8.99003 9.6312 8.69878 9.96299C8.40753 10.2948 8.69878 8.30404 8.11627 7.64045C7.56761 7.01542 6.76056 6.97911 5.69512 6.977C5.58466 6.97678 5.49501 7.06641 5.49501 7.17687V8.35645C5.49501 8.46186 5.36884 8.51605 5.29239 8.44348L2.09167 5.40494C2.04183 5.35763 2.04183 5.2782 2.09167 5.23088L5.29239 2.19235C5.36884 2.11978 5.49501 2.17397 5.49501 2.27938Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ReplyFilled12;
import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.11621 1.11642C9.60437 0.62845 10.3957 0.628362 10.8838 1.11642C11.3717 1.60454 11.3717 2.39591 10.8838 2.884L7.76855 6.00021L10.8838 9.11545C11.3718 9.60344 11.3715 10.3948 10.8838 10.883C10.3956 11.3712 9.60437 11.3712 9.11621 10.883L6 7.76779L2.88379 10.884C2.39572 11.3721 1.60439 11.3719 1.11621 10.884C0.628096 10.3958 0.628069 9.60457 1.11621 9.11642L4.23242 6.00021L1.11621 2.884C0.628056 2.39585 0.628056 1.6036 1.11621 1.11545C1.60432 0.627864 2.39577 0.627718 2.88379 1.11545L6 4.23264L9.11621 1.11642Z"
        fill={color}
      />
    </svg>
  );
};

XMarkBoldFilled12.category = 'Interface General';

export default XMarkBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const Flag20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.95831 12.5694V3.66596C3.95831 3.34888 4.13805 3.05963 4.43238 2.94168C5.06483 2.68824 6.24125 2.29169 7.4107 2.29169C9.1294 2.29169 10.8706 4.00465 12.5892 4.00465C13.3762 4.00465 14.1664 3.82506 14.7918 3.63035C15.3816 3.44672 16.0416 3.87159 16.0416 4.48933V12.0517C16.0416 12.3688 15.8619 12.658 15.5676 12.7759C14.9351 13.0294 13.7587 13.4259 12.5892 13.4259C10.8706 13.4259 9.1294 11.713 7.4107 11.713C5.69202 11.713 3.95831 12.5694 3.95831 12.5694ZM3.95831 12.5694V17.7084"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag20;

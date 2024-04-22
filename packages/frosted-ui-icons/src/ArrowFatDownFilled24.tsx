import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.2 3L14.8 3C15.0209 3 15.2 3.17909 15.2 3.4L15.2 11C15.2 11.2209 15.3791 11.4 15.6 11.4L19.146 11.4C19.4851 11.4 19.6704 11.7955 19.4533 12.0561L12.3073 20.6313C12.1474 20.8232 11.8526 20.8232 11.6927 20.6313L4.54673 12.0561C4.32962 11.7955 4.51488 11.4 4.85402 11.4L8.4 11.4C8.62092 11.4 8.8 11.2209 8.8 11L8.8 3.4C8.8 3.17909 8.97909 3 9.2 3Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M12.8835 21.1114L12.3073 20.6313L12.8835 21.1114L20.0294 12.5362C20.6536 11.7872 20.121 10.65 19.146 10.65L15.95 10.65L15.95 3.4C15.95 2.76487 15.4351 2.25 14.8 2.25L9.2 2.25C8.56488 2.25 8.05 2.76487 8.05 3.4L8.05 10.65L4.85402 10.65C3.879 10.65 3.34638 11.7872 3.97056 12.5362L11.1165 21.1114C11.5763 21.6631 12.4237 21.6631 12.8835 21.1114Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled24;

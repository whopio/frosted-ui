import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.8835 21.1114L12.3073 20.6313L12.8835 21.1114L20.0294 12.5362C20.6536 11.7872 20.121 10.65 19.146 10.65L15.95 10.65L15.95 3.4C15.95 2.76487 15.4351 2.25 14.8 2.25L9.2 2.25C8.56488 2.25 8.05 2.76487 8.05 3.4L8.05 10.65L4.85402 10.65C3.879 10.65 3.34638 11.7872 3.97056 12.5362L11.1165 21.1114C11.5763 21.6631 12.4237 21.6631 12.8835 21.1114Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDown24;

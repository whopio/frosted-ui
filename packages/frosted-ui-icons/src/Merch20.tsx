import * as React from 'react';
import { IconProps } from './types';

export const Merch20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99078 4.68375C7.48098 4.68375 7.17676 2.25 7.17676 2.25L1.16179 4.99064C0.800448 5.15528 0.648264 5.5872 0.826592 5.942L2.14298 8.56102C2.29755 8.86855 2.65275 9.01808 2.98072 8.91369L4.2464 8.51086V17.125C4.2464 17.4702 4.52622 17.75 4.8714 17.75H15.125C15.4702 17.75 15.75 17.4702 15.75 17.125V8.51086L17.0195 8.91411C17.3474 9.01827 17.7023 8.86872 17.8568 8.56133L19.173 5.94267C19.3515 5.58762 19.1989 5.1554 18.8372 4.99101L12.8048 2.25C12.8048 2.25 12.5006 4.68375 9.99078 4.68375Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Merch20;

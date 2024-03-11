import * as React from 'react';
import { IconProps } from './types';

export const Moon20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.24488 2.96371C8.27791 2.9555 8.28754 2.9606 8.28948 2.96162C8.2896 2.96169 8.28969 2.96174 8.28975 2.96176C8.29757 2.96515 8.32578 2.98058 8.36039 3.03C8.43654 3.13877 8.47933 3.3228 8.4348 3.49644C7.86289 5.72667 8.44937 8.19605 10.1978 9.94444C11.8969 11.6436 14.2773 12.2454 16.4569 11.7529C16.6317 11.7134 16.8141 11.7615 16.9203 11.8406C16.9686 11.8765 16.9831 11.905 16.9862 11.9128C16.9862 11.9128 16.9862 11.9129 16.9863 11.913C16.9872 11.9149 16.9921 11.9246 16.9829 11.9574C16.1288 15.0112 13.3249 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 6.60195 5.08845 3.74821 8.24488 2.96371Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Moon20;

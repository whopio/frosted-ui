import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3058 17.8367C17.5722 13.7539 19.2381 8.97258 17.9308 5.70482C17.2915 4.10684 15.9517 2.96602 14.3768 2.614C12.9448 2.29392 11.3661 2.63593 9.99954 3.7913C8.63296 2.63593 7.05433 2.29392 5.62231 2.61401C4.04742 2.96602 2.70766 4.10685 2.06837 5.70483C0.761035 8.97267 2.42698 13.7539 9.69346 17.8367C9.88354 17.9435 10.1156 17.9435 10.3058 17.8367Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HeartFilled20;

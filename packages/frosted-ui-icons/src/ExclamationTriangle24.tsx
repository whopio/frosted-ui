import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8C12.4142 8 12.75 8.33579 12.75 8.75V14.25C12.75 14.6642 12.4142 15 12 15C11.5858 15 11.25 14.6642 11.25 14.25V8.75C11.25 8.33579 11.5858 8 12 8Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
          fill={color}
        />
        <path
          d="M12 2.5C11.5756 2.5 11.1841 2.72866 10.9756 3.09833L1.66342 19.6104C1.55629 19.8004 1.5 20.0148 1.5 20.2329C1.5 20.9327 2.06732 21.5 2.76713 21.5H21.2329C21.9327 21.5 22.5 20.9327 22.5 20.2329C22.5 20.0148 22.4437 19.8004 22.3366 19.6104L13.0244 3.09833C12.8159 2.72866 12.4244 2.5 12 2.5ZM9.66909 2.36149C10.1435 1.52032 11.0343 1 12 1C12.9657 1 13.8565 1.52032 14.3309 2.36149L23.6431 18.8736C23.8771 19.2884 24 19.7566 24 20.2329C24 21.7611 22.7611 23 21.2329 23H2.76713C1.23889 23 0 21.7611 0 20.2329C0 19.7566 0.122923 19.2884 0.356877 18.8736L9.66909 2.36149Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ExclamationTriangle24;

import * as React from 'react';
import { IconProps } from './types';

export const Reply20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.59552 9.6896L8.68004 3.33169C8.94829 3.09094 9.37496 3.28133 9.37496 3.64179V7.083C16.4583 7.083 18.3333 9.79135 18.3333 16.8747C17.0833 14.3747 16.4583 12.9164 9.37496 12.9164V16.3575C9.37496 16.718 8.94829 16.9084 8.68004 16.6677L1.59552 10.3098C1.41103 10.1442 1.41103 9.8551 1.59552 9.6896Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply20;

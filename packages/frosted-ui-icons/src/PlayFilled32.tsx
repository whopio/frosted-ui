import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.3253 3.15665C9.88559 1.57804 6.66667 3.32923 6.66667 6.23507V25.765C6.66667 28.6708 9.88559 30.422 12.3253 28.8434L27.4165 19.0784C29.6495 17.6335 29.6496 14.3664 27.4165 12.9216L12.3253 3.15665Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled32;

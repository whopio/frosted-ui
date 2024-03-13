import * as React from 'react';
import { IconProps } from './types';

export const Link16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.21875 6.53125L1.83731 8.91269C1.14112 9.60888.75 10.5531.75 11.5377V11.5377C.75 13.5879 2.41206 15.25 4.46231 15.25V15.25C5.44688 15.25 6.39112 14.8589 7.08731 14.1627L9.46875 11.7812M6.53125 4.21875L8.91269 1.83731C9.60888 1.14112 10.5531.75 11.5377.75V.75C13.5879.75 15.25 2.41206 15.25 4.46231V4.46231C15.25 5.44688 14.8589 6.39112 14.1627 7.08731L11.7812 9.46875M5.75 10.25L10.25 5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Link16;

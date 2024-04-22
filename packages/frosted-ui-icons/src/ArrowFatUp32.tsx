import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.0141 4.01152L15.0141 4.01152L5.48612 15.4451C4.78956 16.281 5.38395 17.55 6.472 17.55H10.9833V27.4667C10.9833 28.1754 11.5579 28.75 12.2666 28.75H19.7333C20.4421 28.75 21.0166 28.1754 21.0166 27.4667V17.55H25.528C26.616 17.55 27.2104 16.281 26.5138 15.4451L16.9859 4.01152L16.9859 4.01152C16.4728 3.39584 15.5272 3.39584 15.0141 4.01152Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatUp32;

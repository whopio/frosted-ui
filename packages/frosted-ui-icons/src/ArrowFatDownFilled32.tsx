import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.2667 4L19.7333 4C20.0279 4 20.2667 4.23878 20.2667 4.53333L20.2667 14.6667C20.2667 14.9612 20.5055 15.2 20.8 15.2L25.528 15.2C25.9802 15.2 26.2272 15.7274 25.9377 16.0748L16.4097 27.5083C16.1965 27.7642 15.8035 27.7642 15.5903 27.5083L6.06231 16.0748C5.77283 15.7274 6.01985 15.2 6.47203 15.2L11.2 15.2C11.4946 15.2 11.7333 14.9612 11.7333 14.6667L11.7333 4.53333C11.7333 4.23878 11.9721 4 12.2667 4Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M16.9859 27.9885L16.9859 27.9885L26.5139 16.5549C27.2104 15.719 26.616 14.45 25.528 14.45L21.0167 14.45L21.0167 4.53333C21.0167 3.82457 20.4421 3.25 19.7333 3.25L12.2667 3.25C11.5579 3.25 10.9833 3.82456 10.9833 4.53333L10.9833 14.45L6.47203 14.45C5.38398 14.45 4.78958 15.719 5.48614 16.5549L15.0141 27.9885L15.0141 27.9885C15.5272 28.6042 16.4728 28.6042 16.9859 27.9885Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled32;
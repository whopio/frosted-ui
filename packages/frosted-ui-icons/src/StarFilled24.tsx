import * as React from 'react';
import { IconProps } from './types';

export const StarFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3151 2.17969C11.5904 1.60677 12.4096 1.60677 12.6849 2.17969L15.0534 7.10966C15.1643 7.34032 15.3847 7.49956 15.6393 7.5329L21.0889 8.24637C21.7226 8.32933 21.976 9.1071 21.5119 9.54462L17.5278 13.3009C17.3409 13.4772 17.2564 13.7357 17.3034 13.9877L18.3039 19.3544C18.4204 19.9793 17.7574 20.4596 17.1961 20.157L12.3614 17.5509C12.1359 17.4294 11.8641 17.4294 11.6386 17.5509L6.80393 20.157C6.24257 20.4596 5.57955 19.9793 5.69605 19.3544L6.69661 13.9877C6.7436 13.7357 6.65911 13.4772 6.47218 13.3009L2.48806 9.54462C2.024 9.1071 2.27743 8.32933 2.91107 8.24637L8.36069 7.5329C8.61531 7.49956 8.83574 7.34032 8.94656 7.10966L11.3151 2.17969Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default StarFilled24;

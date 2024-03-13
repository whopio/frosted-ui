import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlusSize4 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_570_1073)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M14.1875 9.01823C14.1875 5.74265 14.1875 5.71022 14.1875 3.78328C14.1875 2.67871 13.2921 1.78125 12.1875 1.78125H3.8125C2.70793 1.78125 1.8125 2.67668 1.8125 3.78125V12.1875C1.8125 13.2921 2.70793 14.1875 3.8125 14.1875C5.55949 14.1875 7.38415 14.1875 9.03125 14.1875"
            strokeLinejoin="round"
          />
          <path d="M4.77606 9.33337H8.04428M4.77606 6.66663H11.3125M12.6667 14.6667V12.6667M12.6667 10.6667V12.6667M12.6667 12.6667H10.6667M12.6667 12.6667H14.6667" />
        </g>
        <defs>
          <clipPath id="clip0_570_1073">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DocumentPlusSize4;

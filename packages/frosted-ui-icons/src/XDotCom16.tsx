import * as React from 'react';
import { IconProps } from './types';

export const XDotCom16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_286_154)">
          <path
            d="M9.48944 6.77489L15.3177 -3.05176e-05H13.9366L8.87591 5.88254L4.83393 -3.05176e-05H0.171997L6.28425 8.89546L0.171997 16H1.55319L6.89743 9.78781L11.166 16H15.828L9.4891 6.77489H9.48944ZM7.5977 8.97383L6.9784 8.08804L2.05086 1.03972H4.1723L8.14888 6.72794L8.76818 7.61373L13.9373 15.0075H11.8158L7.5977 8.97417V8.97383Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_286_154">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XDotCom16;

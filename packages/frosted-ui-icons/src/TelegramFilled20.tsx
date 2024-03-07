import * as React from 'react';
import { IconProps } from './types';

export const TelegramFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_324_124)">
          <path
            d="M10 1.53125C14.8164 1.53125 18.7188 5.43359 18.7188 10.25C18.7188 15.0664 14.8164 18.9688 10 18.9688C5.18359 18.9688 1.28125 15.0664 1.28125 10.25C1.28125 5.43359 5.18359 1.53125 10 1.53125ZM14.2539 7.50781C14.3945 6.94531 14.043 6.69922 13.6562 6.83984L5.25391 10.0742C4.69141 10.2852 4.69141 10.6367 5.14844 10.7773L7.29297 11.4453L12.2852 8.28125C12.5312 8.14062 12.7422 8.24609 12.5664 8.38672L8.52344 12.043L8.38281 14.2578C8.59375 14.2578 8.69922 14.1523 8.80469 14.0469L9.85938 13.0273L12.0391 14.6445C12.4609 14.8555 12.7422 14.75 12.8477 14.2578L14.2539 7.50781Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_324_124">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default TelegramFilled20;

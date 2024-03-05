import * as React from 'react';
import { IconProps } from './types';

export const LinkAdd24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_274_82)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M19 22V19M19 16V19M19 19H16M19 19H22M7.36237 12.8384L13.0192 7.18152M8.77747 4.70727L10.3688 3.11592C12.8433.64154 15.6721.994736 17.4399 2.76236 19.2077 4.52999 19.5608 7.35899 17.0863 9.83342L15.495 11.4248M11.6057 15.3136L9.93567 16.9836C7.53994 19.3794 4.63224 19.105 2.86461 17.3372 1.09698 15.5695.822414 12.6619 3.21817 10.2661L4.88824 8.59607" />
        </g>
        <defs>
          <clipPath id="clip0_274_82">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default LinkAdd24;

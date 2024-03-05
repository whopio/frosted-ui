import * as React from 'react';
import { IconProps } from './types';

export const DiscordFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_215_21)">
          <path
            d="M27.1562 6.32812C30.7656 11.6875 32.5703 17.7031 31.9141 24.6484C31.9141 24.6484 31.9141 24.7031 31.8594 24.7031C29.4531 26.5078 26.7188 27.875 23.8203 28.75C23.7656 28.8047 23.7656 28.75 23.7109 28.75C23.1094 27.875 22.5625 27 22.0703 26.0703C22.0703 26.0156 22.0703 25.9609 22.125 25.9062C23 25.5781 23.8203 25.1953 24.6406 24.7031C24.6953 24.7031 24.6953 24.5938 24.6406 24.5391C24.4766 24.4297 24.3125 24.3203 24.1484 24.1562C24.0938 24.1562 24.0938 24.1562 24.0391 24.1562C18.8438 26.5625 13.1562 26.5625 7.90625 24.1562C7.85156 24.1562 7.79688 24.1562 7.79688 24.1562C7.63281 24.3203 7.46875 24.4297 7.30469 24.5391C7.19531 24.5938 7.25 24.7031 7.30469 24.7031C8.07031 25.1953 8.94531 25.5781 9.82031 25.9062C9.875 25.9609 9.875 26.0156 9.875 26.0703C9.38281 27 8.83594 27.875 8.23438 28.75C8.17969 28.75 8.125 28.8047 8.125 28.75C5.22656 27.875 2.49219 26.5078 0.0859375 24.7031C0.03125 24.7031 0.03125 24.6484 0.03125 24.6484C-0.515625 18.6328 0.632812 12.5625 4.78906 6.32812C4.78906 6.32812 4.78906 6.32812 4.84375 6.32812C6.92188 5.34375 9.10938 4.6875 11.3516 4.30469C11.4062 4.25 11.4609 4.30469 11.4609 4.30469C11.7891 4.85156 12.0625 5.45312 12.2812 6C14.7422 5.61719 17.2031 5.61719 19.6641 6C19.8828 5.45312 20.1562 4.85156 20.4844 4.30469C20.4844 4.30469 20.5391 4.25 20.5938 4.30469C22.8359 4.6875 25.0234 5.34375 27.1016 6.32812C27.1562 6.32812 27.1562 6.32812 27.1562 6.32812ZM10.6406 20.9844C12.2266 20.9844 13.5391 19.5078 13.5391 17.7578C13.5391 15.9531 12.2812 14.5312 10.6406 14.5312C9.05469 14.5312 7.74219 15.9531 7.74219 17.7578C7.74219 19.5078 9.05469 20.9844 10.6406 20.9844ZM21.3047 20.9844C22.9453 20.9844 24.2031 19.5078 24.2031 17.7578C24.2578 15.9531 22.9453 14.5312 21.3047 14.5312C19.7188 14.5312 18.4609 15.9531 18.4609 17.7578C18.4609 19.5078 19.7188 20.9844 21.3047 20.9844Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_215_21">
            <path fill={color} d="M0 0H32V32H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DiscordFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const DiscordSize32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.1815 6.69705C24.2543 5.81007 22.2197 5.1808 20.1297 4.82535C19.8437 5.33928 19.585 5.86805 19.3545 6.40945C17.1284 6.07223 14.8645 6.07223 12.6384 6.40945C12.4078 5.86812 12.149 5.33935 11.8632 4.82535C9.77194 5.1838 7.73605 5.81456 5.80689 6.70169C1.977 12.398 0.938769 17.9528 1.45788 23.4288C3.70076 25.0947 6.21118 26.3616 8.88002 27.1745C9.48097 26.362 10.0127 25.5001 10.4697 24.5977C9.60178 24.2719 8.76413 23.8699 7.96638 23.3964C8.17634 23.2433 8.38168 23.0856 8.58009 22.9325C10.9013 24.0299 13.4348 24.5988 16 24.5988C18.565 24.5988 21.0985 24.0299 23.4197 22.9325C23.6205 23.0972 23.8259 23.2549 24.0335 23.3964C23.2343 23.8707 22.395 24.2735 21.5256 24.6001C21.982 25.502 22.5137 26.3632 23.1152 27.1745C25.7864 26.3649 28.2987 25.0985 30.542 23.4312C31.1511 17.0808 29.5015 11.577 26.1815 6.69705Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M8.4856 17.1179C8.4856 18.7415 9.6807 20.0612 11.1273 20.0612 12.6016 20.0612 13.7413 18.7415 13.7667 17.1179 13.7921 15.4944 12.6062 14.1631 11.1227 14.1631 9.63917 14.1631 8.4856 15.4944 8.4856 17.1179zM18.2334 17.1179C18.2334 18.7415 19.4238 20.0612 20.8727 20.0612 22.347 20.0612 23.4845 18.7415 23.5098 17.1179 23.5353 15.4944 22.3586 14.1631 20.8727 14.1631 19.3869 14.1631 18.2334 15.4944 18.2334 17.1179z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiscordSize32;

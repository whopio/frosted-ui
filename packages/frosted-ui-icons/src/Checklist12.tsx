import * as React from 'react';
import { IconProps } from './types';

export const Checklist12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3 3C2.89645 3 2.8125 3.08395 2.8125 3.1875V10.3125C2.8125 10.4161 2.89645 10.5 3 10.5H9C9.10355 10.5 9.1875 10.4161 9.1875 10.3125V3.1875C9.1875 3.08395 9.10355 3 9 3H8.29688C7.88266 3 7.54688 2.66421 7.54688 2.25C7.54688 1.83579 7.88266 1.5 8.29688 1.5H9C9.93198 1.5 10.6875 2.25552 10.6875 3.1875V10.3125C10.6875 11.2445 9.93198 12 9 12H3C2.06802 12 1.3125 11.2445 1.3125 10.3125V3.1875C1.3125 2.25552 2.06802 1.5 3 1.5H3.70312C4.11734 1.5 4.45312 1.83579 4.45312 2.25C4.45312 2.66421 4.11734 3 3.70312 3H3Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.75 1.5V2.5H7.25V1.5H4.75ZM3.25 1.5C3.25 0.671154 3.92231 0 4.75032 0H7.24968C8.07769 0 8.75 0.671154 8.75 1.5V2.5C8.75 3.32843 8.07843 4 7.25 4H4.75C3.92157 4 3.25 3.32843 3.25 2.5V1.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.5625 6.78125L5.6875 8.0625L7.4375 5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Checklist12;

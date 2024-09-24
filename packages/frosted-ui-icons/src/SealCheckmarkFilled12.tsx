import * as React from 'react';
import { IconProps } from './types';

export const SealCheckmarkFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2948_56)">
          <path
            d="M5.99999 0.75C6.73675 0.75 7.3908 1.10412 7.80123 1.65143C8.47846 1.55463 9.19134 1.76672 9.71231 2.28769C10.2333 2.80866 10.4454 3.52154 10.3486 4.19876C10.8959 4.60919 11.25 5.26324 11.25 6C11.25 6.73676 10.8959 7.39082 10.3486 7.80124C10.4453 8.47846 10.2333 9.19133 9.7123 9.71229C9.19133 10.2333 8.47846 10.4453 7.80124 10.3486C7.39081 10.8959 6.73676 11.25 5.99999 11.25C5.26323 11.25 4.60918 10.8959 4.19876 10.3486C3.52154 10.4454 2.80866 10.2333 2.28769 9.71231C1.76672 9.19134 1.55463 8.47846 1.65143 7.80124C1.10412 7.39081 0.75 6.73676 0.75 6C0.75 5.26324 1.10412 4.60918 1.65144 4.19876C1.55465 3.52154 1.76674 2.80866 2.2877 2.2877C2.80866 1.76674 3.52153 1.55465 4.19875 1.65143C4.60918 1.10412 5.26323 0.75 5.99999 0.75Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.80123 1.65143L7.2012 2.10139C7.36552 2.32051 7.63622 2.43264 7.90735 2.39388L7.80123 1.65143ZM9.71231 2.28769L9.18198 2.81802L9.71231 2.28769ZM10.3486 4.19876L9.60611 4.09264C9.56736 4.36378 9.67949 4.63447 9.89861 4.79879L10.3486 4.19876ZM10.3486 7.80124L9.89861 7.20121C9.67948 7.36552 9.56736 7.63622 9.6061 7.90735L10.3486 7.80124ZM9.7123 9.71229L10.2426 10.2426V10.2426L9.7123 9.71229ZM7.80124 10.3486L7.90735 9.6061C7.63622 9.56735 7.36552 9.67948 7.2012 9.8986L7.80124 10.3486ZM4.19876 10.3486L4.79879 9.89861C4.63447 9.67949 4.36378 9.56736 4.09264 9.60612L4.19876 10.3486ZM2.28769 9.71231L2.81802 9.18198L2.81802 9.18198L2.28769 9.71231ZM1.65143 7.80124L2.39388 7.90735C2.43264 7.63622 2.32051 7.36552 2.10139 7.20121L1.65143 7.80124ZM1.65144 4.19876L2.10139 4.79879C2.32052 4.63447 2.43265 4.36378 2.39389 4.09264L1.65144 4.19876ZM4.19875 1.65143L4.09264 2.39389C4.36377 2.43264 4.63447 2.32051 4.79878 2.10139L4.19875 1.65143ZM8.40126 1.20147C7.8553 0.473414 6.98283 0 5.99999 0V1.5C6.49068 1.5 6.92631 1.73482 7.2012 2.10139L8.40126 1.20147ZM10.2426 1.75736C9.54767 1.06239 8.59598 0.780213 7.69511 0.908975L7.90735 2.39388C8.36093 2.32905 8.83501 2.47105 9.18198 2.81802L10.2426 1.75736ZM11.091 4.30488C11.2198 3.40401 10.9376 2.45233 10.2426 1.75736L9.18198 2.81802C9.52895 3.16499 9.67094 3.63906 9.60611 4.09264L11.091 4.30488ZM12 6C12 5.01716 11.5266 4.14469 10.7985 3.59873L9.89861 4.79879C10.2652 5.07368 10.5 5.50931 10.5 6H12ZM10.7985 8.40128C11.5266 7.85531 12 6.98284 12 6H10.5C10.5 6.49069 10.2652 6.92632 9.89861 7.20121L10.7985 8.40128ZM10.2426 10.2426C10.9376 9.54766 11.2198 8.59599 11.091 7.69513L9.6061 7.90735C9.67093 8.36093 9.52893 8.835 9.18197 9.18196L10.2426 10.2426ZM7.69512 11.091C8.59599 11.2198 9.54766 10.9376 10.2426 10.2426L9.18197 9.18196C8.835 9.52893 8.36093 9.67093 7.90735 9.6061L7.69512 11.091ZM5.99999 12C6.98284 12 7.85531 11.5266 8.40127 10.7985L7.2012 9.8986C6.92631 10.2652 6.49068 10.5 5.99999 10.5V12ZM3.59873 10.7985C4.14469 11.5266 5.01716 12 5.99999 12V10.5C5.50931 10.5 5.07368 10.2652 4.79879 9.89861L3.59873 10.7985ZM1.75736 10.2426C2.45233 10.9376 3.40401 11.2198 4.30487 11.091L4.09264 9.60612C3.63906 9.67095 3.16499 9.52895 2.81802 9.18198L1.75736 10.2426ZM0.908974 7.69512C0.780215 8.59599 1.06239 9.54767 1.75736 10.2426L2.81802 9.18198C2.47105 8.83501 2.32905 8.36094 2.39388 7.90735L0.908974 7.69512ZM0 6C0 6.98283 0.473414 7.8553 1.20147 8.40127L2.10139 7.20121C1.73482 6.92632 1.5 6.49068 1.5 6H0ZM1.20148 3.59872C0.47342 4.14468 0 5.01716 0 6H1.5C1.5 5.50931 1.73482 5.07368 2.10139 4.79879L1.20148 3.59872ZM1.75737 1.75737C1.06241 2.45233 0.780233 3.404 0.908984 4.30487L2.39389 4.09264C2.32907 3.63907 2.47107 3.16499 2.81803 2.81803L1.75737 1.75737ZM4.30486 0.908978C3.404 0.780231 2.45233 1.06241 1.75737 1.75737L2.81803 2.81803C3.16499 2.47107 3.63907 2.32907 4.09264 2.39389L4.30486 0.908978ZM5.99999 0C5.01715 0 4.14468 0.473417 3.59872 1.20148L4.79878 2.10139C5.07367 1.73482 5.50931 1.5 5.99999 1.5V0Z"
            fill={color}
          />
          <path
            d="M3.75 6L5.25 7.59375L8.25 4.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2948_56">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default SealCheckmarkFilled12;

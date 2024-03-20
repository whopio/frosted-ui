import * as React from 'react';
import { IconProps } from './types';

export const Atom32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 30.25C16.9856 30.25 17.8319 29.7081 18.5105 28.9332C19.1903 28.1568 19.7684 27.0765 20.2388 25.8064C21.1818 23.2604 21.75 19.7932 21.75 16C21.75 12.2068 21.1818 8.73961 20.2388 6.19357C19.7684 4.92345 19.1903 3.84321 18.5105 3.06681C17.8319 2.29187 16.9856 1.75 16 1.75C15.0144 1.75 14.1681 2.29187 13.4895 3.06681C12.8097 3.84321 12.2316 4.92345 11.7612 6.19357C10.8182 8.73961 10.25 12.2068 10.25 16C10.25 19.7932 10.8182 23.2604 11.7612 25.8064C12.2316 27.0765 12.8097 28.1568 13.4895 28.9332C14.1681 29.7081 15.0144 30.25 16 30.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M28.3409 23.125C28.8337 22.2715 28.7875 21.2676 28.4557 20.2925C28.1233 19.3155 27.4768 18.2747 26.612 17.2323C24.8786 15.1426 22.16 12.9169 18.875 11.0204C15.59 9.12379 12.3032 7.88223 9.62681 7.42585C8.29164 7.19818 7.06708 7.15871 6.05476 7.35928C5.04436 7.55948 4.15194 8.02146 3.65914 8.87501C3.16633 9.72857 3.21246 10.7324 3.54429 11.7076C3.87674 12.6845 4.52321 13.7253 5.38796 14.7677C7.1214 16.8574 9.84003 19.0831 13.125 20.9797C16.41 22.8762 19.6968 24.1178 22.3732 24.5742C23.7084 24.8018 24.9329 24.8413 25.9452 24.6407C26.9556 24.4405 27.8481 23.9786 28.3409 23.125Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3.65914 23.125C3.16634 22.2715 3.21247 21.2676 3.54429 20.2925C3.87675 19.3155 4.52321 18.2747 5.38796 17.2323C7.12141 15.1426 9.84003 12.9169 13.125 11.0204C16.41 9.12379 19.6968 7.88223 22.3732 7.42585C23.7084 7.19818 24.9329 7.15871 25.9452 7.35928C26.9556 7.55948 27.8481 8.02146 28.3409 8.87501C28.8337 9.72857 28.7875 10.7324 28.4557 11.7076C28.1233 12.6845 27.4768 13.7253 26.612 14.7677C24.8786 16.8574 22.16 19.0831 18.875 20.9797C15.59 22.8762 12.3032 24.1178 9.62681 24.5742C8.29164 24.8018 7.06708 24.8413 6.05477 24.6407C5.04437 24.4405 4.15194 23.9786 3.65914 23.125Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2" fill={color} />
      </svg>
    );
  },
);

export default Atom32;
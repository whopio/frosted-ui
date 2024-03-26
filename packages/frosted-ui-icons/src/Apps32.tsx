import * as React from 'react';
import { IconProps } from './types';

export const Apps32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.75 1.75C16.75 1.33579 16.4142 1 16 1C15.5858 1 15.25 1.33579 15.25 1.75V5.04642C12.2903 5.41549 10 7.94029 10 11C10 12.8056 10.7975 14.4248 12.0595 15.5248L8.83738 23.2754C8.42334 22.9698 8.05279 22.6518 7.72265 22.3344C6.8986 21.5421 6.32304 20.7498 5.95502 20.1584C5.77129 19.8632 5.6402 19.6195 5.55648 19.453C5.51464 19.3699 5.48471 19.3061 5.46602 19.2651C5.45668 19.2445 5.45015 19.2297 5.44636 19.221L5.44311 19.2134L4.75001 19.5C5.44311 19.2134 5.44297 19.2131 5.44284 19.2128L5.44271 19.2125L5.44263 19.2123L5.44247 19.2119C5.28367 18.8302 4.84572 18.6488 4.46345 18.8069C4.08066 18.9652 3.89865 19.4038 4.05692 19.7866L4.75001 19.5C4.05692 19.7866 4.05708 19.787 4.05725 19.7874L4.05765 19.7883L4.05864 19.7907L4.06142 19.7973L4.0702 19.8178C4.07748 19.8346 4.08766 19.8576 4.10082 19.8865C4.12715 19.9444 4.16544 20.0257 4.21643 20.127C4.31837 20.3297 4.47141 20.6134 4.6815 20.951C5.10112 21.6252 5.75196 22.5204 6.68302 23.4156C7.13678 23.8519 7.65634 24.2873 8.24655 24.6965L6.05748 29.9622C5.89847 30.3446 6.07963 30.7836 6.4621 30.9426C6.84458 31.1016 7.28354 30.9205 7.44255 30.538L9.54368 25.4839C11.2287 26.3713 13.357 27 16 27C18.643 27 20.7714 26.3713 22.4563 25.4839L24.5575 30.538C24.7165 30.9205 25.1554 31.1016 25.5379 30.9426C25.9204 30.7836 26.1016 30.3446 25.9425 29.9622L23.7535 24.6965C24.3437 24.2873 24.8632 23.8519 25.317 23.4156C26.2481 22.5204 26.8989 21.6252 27.3185 20.951C27.5286 20.6134 27.6817 20.3297 27.7836 20.127C27.8346 20.0257 27.8729 19.9444 27.8992 19.8865C27.9081 19.867 27.9157 19.8501 27.9219 19.836C27.9248 19.8293 27.9275 19.8232 27.9298 19.8178L27.9386 19.7973L27.9414 19.7907L27.9424 19.7883L27.9428 19.7874C27.9429 19.787 27.9431 19.7866 27.25 19.5L27.9431 19.7866C28.1014 19.4038 27.9194 18.9652 27.5366 18.8069C27.154 18.6487 26.7157 18.8304 26.5572 19.2128L27.25 19.5L26.5569 19.2134L26.5537 19.221C26.5499 19.2297 26.5434 19.2445 26.534 19.2651C26.5153 19.3061 26.4854 19.3699 26.4436 19.453C26.3598 19.6195 26.2287 19.8632 26.045 20.1584C25.677 20.7498 25.1014 21.5421 24.2774 22.3344C23.9472 22.6518 23.5767 22.9698 23.1626 23.2754L19.9405 15.5248C21.2025 14.4248 22 12.8056 22 11C22 7.94029 19.7097 5.41549 16.75 5.04642V1.75ZM21.8779 24.0925L18.6695 16.3749C17.8655 16.775 16.959 17 16 17C15.041 17 14.1346 16.775 13.3306 16.3749L10.1221 24.0925C11.6289 24.9098 13.5597 25.5 16 25.5C18.4404 25.5 20.3711 24.9098 21.8779 24.0925ZM13.3982 14.672L13.4098 14.6802C14.1422 15.1967 15.0357 15.5 16 15.5C16.9644 15.5 17.8579 15.1966 18.5903 14.6802L18.6018 14.6721C19.7505 13.8567 20.5 12.5159 20.5 11C20.5 8.51472 18.4853 6.5 16 6.5C13.5147 6.5 11.5 8.51472 11.5 11C11.5 12.5158 12.2495 13.8566 13.3982 14.672Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Apps32;

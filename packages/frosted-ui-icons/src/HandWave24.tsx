import * as React from 'react';
import { IconProps } from './types';

export const HandWave24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M5.90206 11.8232C5.31627 11.2374 4.36652 11.2374 3.78074 11.8232C3.19495 12.409 3.19495 13.3588 3.78074 13.9446L8.37693 18.5407C11.3058 21.4697 16.0546 21.4697 18.9835 18.5407C21.9124 15.6118 21.9124 10.8631 18.9835 7.93415L15.2712 4.22184C15.076 4.02658 14.7593 4.0266 14.5641 4.22184C13.8262 4.9597 13.5531 5.98624 13.7446 6.9379M5.90206 11.8232L4.48784 10.409C3.90205 9.82323 3.90205 8.87349 4.48784 8.2877C5.07361 7.70193 6.02337 7.70191 6.60916 8.2877M5.90206 11.8232L8.73048 14.6517M13.7446 6.9379L10.8518 4.04506C10.266 3.45927 9.31625 3.45929 8.73048 4.04506C8.14472 4.63083 8.14469 5.58059 8.73048 6.16638M13.7446 6.9379C13.8573 7.49727 14.1304 8.03074 14.5641 8.46448L15.4886 9.38895C15.5708 9.47118 15.5947 9.59521 15.5489 9.70213C14.9542 11.09 15.2642 12.7001 16.3319 13.7678M6.60916 8.2877L5.90206 7.58059C5.31627 6.9948 5.31629 6.04504 5.90206 5.45927C6.48782 4.87351 7.43759 4.87348 8.02338 5.45927L8.73048 6.16638M6.60916 8.2877L10.1447 11.8232M8.73048 6.16638L12.266 9.70191"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5343 5.43117C20.175 4.30405 19.0527 3.34981 17.6825 3.20236M3.10732 17.9597C3.26704 18.9368 4.42392 20.5143 5.69324 20.8912"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default HandWave24;

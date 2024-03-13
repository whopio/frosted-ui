import * as React from 'react';
import { IconProps } from './types';

export const DiscordFilledSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.81805 2.5114C9.09535 2.17878 8.3324 1.9428 7.54865 1.80951C7.4414 2.00223 7.3444 2.20052 7.25795 2.40355C6.42315 2.27709 5.5742 2.27709 4.73941 2.40355C4.65294 2.20055 4.5559 2.00226 4.4487 1.80951C3.66449 1.94393 2.90103 2.18046 2.17759 2.51314C0.741381 4.64925 0.352046 6.7323 0.546711 8.7858C1.38779 9.4105 2.3292 9.8856 3.33002 10.1904C3.55537 9.88575 3.75478 9.56255 3.92613 9.22415C3.60068 9.10195 3.28656 8.9512 2.9874 8.77365C3.06614 8.71625 3.14314 8.6571 3.21754 8.5997C4.08801 9.0112 5.03805 9.22455 6 9.22455C6.9619 9.22455 7.91195 9.0112 8.7824 8.5997C8.8577 8.66145 8.9347 8.7206 9.01255 8.77365C8.71285 8.9515 8.39815 9.10255 8.0721 9.22505C8.24325 9.56325 8.44265 9.8862 8.6682 10.1904C9.6699 9.88685 10.612 9.41195 11.4533 8.7867C11.6817 6.4053 11.0631 4.34136 9.81805 2.5114ZM4.17271 7.52295C3.63024 7.52295 3.18207 7.02805 3.18207 6.4192C3.18207 5.8104 3.61466 5.31115 4.17098 5.31115C4.72729 5.31115 5.172 5.8104 5.1625 6.4192C5.15295 7.02805 4.72556 7.52295 4.17271 7.52295ZM7.82725 7.52295C7.2839 7.52295 6.8375 7.02805 6.8375 6.4192C6.8375 5.8104 7.27005 5.31115 7.82725 5.31115C8.38445 5.31115 8.8257 5.8104 8.81615 6.4192C8.80665 7.02805 8.3801 7.52295 7.82725 7.52295Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default DiscordFilledSize12;
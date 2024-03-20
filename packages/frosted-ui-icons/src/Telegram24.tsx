import * as React from 'react';
import { IconProps } from './types';

export const Telegram24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.37477 10.8516C8.74447 8.52021 12.3243 6.98306 14.1141 6.24044C19.2306 4.11987 20.2924 3.75157 20.9859 3.73924C21.1384 3.73666 21.478 3.77423 21.6996 3.95293C21.8837 4.10352 21.9356 4.30717 21.9615 4.45002C21.9845 4.59286 22.0162 4.91842 21.9903 5.17255C21.7141 8.07533 20.5141 15.1194 19.904 18.3707C19.6479 19.7464 19.1385 20.2076 18.6464 20.2527C17.5759 20.3508 16.7644 19.5482 15.7284 18.8715C14.1083 17.8123 13.1933 17.153 11.6192 16.1196C9.80055 14.9252 10.9803 14.2687 12.0163 13.1959C12.2868 12.9151 17.0003 8.64269 17.0896 8.25517C17.1011 8.20669 17.1127 8.02599 17.0033 7.93076C16.8969 7.83524 16.7384 7.86795 16.6234 7.89376C16.4593 7.93048 13.8723 9.63656 8.8537 13.0117C8.1199 13.5149 7.45517 13.7601 6.85662 13.7472C6.20051 13.7331 4.93443 13.3766 3.99343 13.072C2.84237 12.6983 1.92435 12.5006 2.00493 11.8658C2.04521 11.5354 2.50283 11.1972 3.37477 10.8516Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Telegram24;

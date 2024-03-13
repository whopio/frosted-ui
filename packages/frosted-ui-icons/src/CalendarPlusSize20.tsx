import * as React from 'react';
import { IconProps } from './types';

export const CalendarPlusSize20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.45833 3.95829H4.79167C3.87119 3.95829 3.125 4.70448 3.125 5.62496V7.70829M6.45833 3.95829H13.5417M6.45833 3.95829V2.29163M3.125 7.70829V15.2083C3.125 16.1288 3.87119 16.875 4.79167 16.875H9.375M3.125 7.70829H16.875M13.5417 3.95829H15.2083C16.1288 3.95829 16.875 4.70448 16.875 5.62496V7.70829M13.5417 3.95829V2.29163M16.875 7.70829V9.37496M14.7917 12.2916V15M14.7917 15V17.7083M14.7917 15H12.0833M14.7917 15H17.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CalendarPlusSize20;

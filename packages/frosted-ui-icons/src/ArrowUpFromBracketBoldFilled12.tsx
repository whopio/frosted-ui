import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracketBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 5.49997C11.4404 5.49997 12 6.05962 12 6.74997V7.74997C11.9999 10.0971 10.0972 12 7.75 12H4.25C1.90283 12 7.00477e-05 10.0971 0 7.74997V6.74997C8.62144e-07 6.05962 0.559645 5.49997 1.25 5.49997C1.94036 5.49997 2.5 6.05962 2.5 6.74997V7.74997C2.50007 8.71641 3.28354 9.49997 4.25 9.49997H7.75C8.71646 9.49997 9.49993 8.71641 9.5 7.74997V6.74997C9.5 6.05962 10.0596 5.49997 10.75 5.49997ZM4.93945 0.439423C5.52521 -0.146338 6.47475 -0.146285 7.06055 0.439423L9.2373 2.61618C9.72545 3.10435 9.72547 3.89561 9.2373 4.38376C8.74913 4.87175 7.95782 4.87187 7.46973 4.38376L7.25 4.16403V6.74997C7.24993 7.44027 6.69031 7.99997 6 7.99997C5.30982 7.99982 4.75007 7.44017 4.75 6.74997V4.16403L4.53027 4.38376C4.0421 4.87176 3.2508 4.87186 2.7627 4.38376C2.27461 3.89564 2.27469 3.10433 2.7627 2.61618L4.93945 0.439423Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowUpFromBracketBoldFilled12.category = 'Arrows';

export default ArrowUpFromBracketBoldFilled12;

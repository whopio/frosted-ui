import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipLeftFilled12"
      {...props}
    >
      <path
        d="M6 0c2.413 0 4.491 1.424 5.443 3.473.08.17.151.345.214.523C11.88 4.624 12 5.3 12 6c0 .9-.199 1.758-.557 2.527C10.491 10.576 8.413 12 6 12S1.509 10.576.557 8.527c-.291-.626-.02-1.37.606-1.66.626-.292 1.37-.02 1.661.606C3.382 8.673 4.595 9.5 6 9.5c1.405 0 2.62-.828 3.177-2.027.207-.446.323-.944.323-1.473 0-.405-.069-.79-.193-1.148l-.141-.346C8.604 3.318 7.396 2.5 6 2.5c-.696 0-1.344.203-1.89.554.515.154.89.631.89 1.196 0 .69-.56 1.25-1.25 1.25h-2.5C.56 5.5 0 4.94 0 4.25v-2.5C0 1.06.56.5 1.25.5c.499 0 .928.293 1.129.716C3.385.453 4.639 0 6 0zm0 3c.552 0 1 .448 1 1v1.98l.573.4c.453.318.563.941.246 1.393-.316.453-.94.563-1.392.247l-1-.7C5.159 7.131 5 6.825 5 6.5V4c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipLeftFilled12.category = 'Arrows';

export default TimeSkipLeftFilled12;

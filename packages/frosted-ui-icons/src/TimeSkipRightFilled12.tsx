import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipRightFilled12"
      {...props}
    >
      <path
        d="M6 0c1.36 0 2.614.454 3.62 1.216.2-.423.63-.716 1.13-.716.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-2.5C7.56 5.5 7 4.94 7 4.25c0-.564.374-1.04.888-1.196C7.343 2.704 6.695 2.5 6 2.5c-1.405 0-2.618.828-3.176 2.027C2.617 4.973 2.5 5.471 2.5 6c0 .529.117 1.027.324 1.473C3.382 8.673 4.595 9.5 6 9.5c1.405 0 2.618-.828 3.176-2.027.29-.626 1.035-.898 1.66-.607.627.291.898 1.035.607 1.661C10.491 10.576 8.413 12 6 12S1.509 10.576.557 8.527C.199 7.757 0 6.9 0 6c0-.9.199-1.758.557-2.527C1.509 1.424 3.587 0 6 0zm0 3c.552 0 1 .448 1 1v1.98l.573.4c.453.318.563.941.246 1.393-.316.453-.94.563-1.392.247l-1-.7C5.159 7.131 5 6.825 5 6.5V4c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipRightFilled12.category = 'Arrows';

export default TimeSkipRightFilled12;

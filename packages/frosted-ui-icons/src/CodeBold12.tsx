import * as React from 'react';
import { IconProps } from './types';

export const CodeBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeBold12"
      {...props}
    >
      <path
        d="M6.16 1.612c.146-.532.696-.847 1.228-.702.533.145.847.695.702 1.228l-2.25 8.25c-.145.532-.695.847-1.228.702-.533-.146-.846-.695-.701-1.228l2.25-8.25zM2.148 3.19c.379-.402 1.012-.421 1.414-.043.402.379.42 1.012.042 1.414L2.25 6l1.354 1.44c.379.401.36 1.035-.042 1.413-.402.379-1.035.36-1.414-.043L.793 7.37C.068 6.6.068 5.4.793 4.63l1.354-1.44zm6.293-.043c.402-.378 1.035-.358 1.413.043l1.356 1.44c.724.77.724 1.972 0 2.742L9.853 8.81c-.378.401-1.01.42-1.413.042-.402-.378-.421-1.012-.043-1.414L9.753 6 8.397 4.56c-.378-.402-.36-1.035.043-1.414z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CodeBold12.category = 'Code';

export default CodeBold12;

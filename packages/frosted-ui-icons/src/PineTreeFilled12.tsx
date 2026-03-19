import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.31738 0.290039C5.68849 -0.0947282 6.3116 -0.0948591 6.68262 0.290039L6.75781 0.378906L9.85547 4.47754C10.3282 5.10331 9.88196 5.9999 9.09766 6H8.98438L10.8184 8.48633C11.2806 9.11349 10.8328 9.9999 10.0537 10H6.75V11.25C6.74994 11.6641 6.41411 11.9999 6 12C5.58583 12 5.25006 11.6642 5.25 11.25V10H1.94629C1.167 10 0.719191 9.11353 1.18164 8.48633L3.01562 6H2.90137C2.11726 5.99974 1.67108 5.10324 2.14355 4.47754L5.24219 0.378906L5.31738 0.290039Z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled12.category = 'Nature & Weather';

export default PineTreeFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const PianoFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 0C13.6495 5.88736e-08 16 2.35051 16 5.25V10.75C16 13.6495 13.6495 16 10.75 16H5.25C2.35051 16 0 13.6495 0 10.75V5.25C1.33299e-08 2.35051 2.35051 0 5.25 0H10.75ZM7 7.5C7 8.23975 6.5971 8.8835 6 9.22949V14.5H10V9.22949C9.4029 8.8835 9 8.23975 9 7.5V1.5H7V7.5ZM13 7.5C13 8.43162 12.3622 9.21129 11.5 9.43359V14.4248C13.2117 14.0773 14.5 12.5642 14.5 10.75V5.25C14.5 4.02299 13.911 2.93316 13 2.24902V7.5ZM3 2.24902C2.08897 2.93316 1.5 4.02299 1.5 5.25V10.75C1.5 12.5642 2.78834 14.0773 4.5 14.4248V9.43359C3.6378 9.21129 3 8.43162 3 7.5V2.24902Z"
        fill={color}
      />
    </svg>
  );
};

PianoFilled16.category = 'Sound & Music';

export default PianoFilled16;

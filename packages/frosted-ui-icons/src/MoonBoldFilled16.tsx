import * as React from 'react';
import { IconProps } from './types';

export const MoonBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 0.5C8.18293 0.5 8.27811 0.71506 8.17346 0.865096C7.60851 1.67506 7.27735 2.66025 7.27734 3.72266C7.27734 6.48408 9.51592 8.72266 12.2773 8.72266C13.3394 8.72266 14.3235 8.39095 15.1331 7.82619C15.2835 7.72128 15.5 7.81664 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5Z"
        fill={color}
      />
    </svg>
  );
};

MoonBoldFilled16.category = 'Nature & Weather';

export default MoonBoldFilled16;

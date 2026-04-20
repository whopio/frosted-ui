import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.8683 9.86523C15.3799 9.08181 15.3798 6.92014 13.8683 6.13671L4.48937 1.27636C2.47437 0.232255 0.278273 2.32829 1.22765 4.38964L2.54503 7.24804H7.23449C7.64864 7.24807 7.98442 7.5839 7.98449 7.99804C7.98449 8.41224 7.64868 8.74802 7.23449 8.74804H2.54699L1.22667 11.6133C0.277818 13.6746 2.47452 15.7708 4.48937 14.7266L13.8683 9.86523Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled16.category = 'Communication';

export default PaperAirplaneRightFilled16;

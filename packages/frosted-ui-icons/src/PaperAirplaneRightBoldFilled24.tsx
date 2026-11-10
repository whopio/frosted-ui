import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled24"
      {...props}
    >
      <path
        d="M21.316 14.77c2.248-1.163 2.248-4.378 0-5.542L6.223 1.416c-3.035-1.57-6.329 1.613-4.86 4.7L3.687 11h7.554c.552 0 1 .448 1 1s-.448 1-1 1H3.685L1.36 17.886c-1.467 3.086 1.827 6.27 4.862 4.699l15.093-7.814z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled24.category = 'Communication';

export default PaperAirplaneRightBoldFilled24;

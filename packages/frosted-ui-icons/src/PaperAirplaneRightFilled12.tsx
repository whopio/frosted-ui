import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightFilled12"
      {...props}
    >
      <path
        d="M10.908 7.78c1.452-.744 1.452-2.818 0-3.561L3.14.244C1.335-.679-.628 1.181.196 3.034l.987 2.214h4.066c.414 0 .75.336.75.75s-.336.75-.75.75H1.183l-.989 2.22c-.824 1.853 1.14 3.713 2.945 2.789l7.77-3.978z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled12.category = 'Communication';

export default PaperAirplaneRightFilled12;

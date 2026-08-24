import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled32"
      {...props}
    >
      <path
        d="M28.895 19.456c2.806-1.451 2.806-5.465 0-6.916L7.59 1.523c-3.867-2-8.038 2.11-6.096 6.005L5.221 15h10.058c.553 0 1 .448 1 1s-.447 1-1 1H5.217L1.493 24.47c-1.941 3.897 2.23 8.004 6.096 6.004l21.306-11.02z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled32.category = 'Communication';

export default PaperAirplaneRightBoldFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBold32"
      {...props}
    >
      <path
        d="M28.894 19.456c2.806-1.452 2.806-5.465 0-6.916L7.59 1.523c-3.867-2-8.038 2.109-6.096 6.005l3.866 7.755c.224.448.224.976 0 1.425L1.492 24.47c-1.94 3.896 2.23 8.004 6.096 6.004l21.306-11.02zm-.92-5.139c1.365.706 1.365 2.657 0 3.362L6.67 28.7c-2.148 1.11-4.465-1.171-3.387-3.336l3.868-7.764c.097-.194.175-.395.235-.6h7.893c.553 0 1-.447 1-1 0-.552-.447-1-1-1h-7.89c-.06-.207-.14-.41-.238-.608L3.284 6.636C2.205 4.472 4.522 2.188 6.671 3.3l21.304 11.018z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBold32.category = 'Communication';

export default PaperAirplaneRightBold32;

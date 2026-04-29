import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.1203 0.279832C11.7237 -0.237848 13.2394 1.27763 12.7214 2.88095L9.94979 11.4598C9.30554 13.4528 6.51301 13.5277 5.76203 11.5725L4.60772 8.56618C4.57754 8.48756 4.51503 8.42532 4.4365 8.39496L1.42445 7.2378C-0.530922 6.48645 -0.454812 3.69371 1.5386 3.05003L10.1203 0.279832ZM11.2461 2.40439C11.3756 2.00355 10.997 1.62504 10.5962 1.75447L2.01516 4.52538C1.4125 4.71998 1.38976 5.56383 1.98092 5.79098L4.968 6.93887L6.73941 5.16746C7.04201 4.86486 7.53262 4.86486 7.83522 5.16746C8.13778 5.47006 8.13781 5.96068 7.83522 6.26327L6.06381 8.03468L7.20884 11.0175C7.43606 11.6082 8.27959 11.5854 8.47445 10.9832L11.2461 2.40439Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight12.category = 'Communication';

export default PaperAirplaneUpRight12;

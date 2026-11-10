import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBoldFilled16"
      {...props}
    >
      <path
        d="M10.323 7.939c.586-.585 1.536-.586 2.121 0 .586.586.586 1.535 0 2.121l-3.147 3.147c-.716.716-1.877.716-2.593 0L3.557 10.06c-.586-.586-.586-1.535 0-2.121.585-.585 1.535-.586 2.12 0L8 10.261l2.323-2.322zm0-5.25c.586-.585 1.536-.586 2.121 0 .586.586.586 1.535 0 2.121L9.297 7.958c-.716.715-1.877.715-2.593 0L3.557 4.81c-.586-.586-.586-1.535 0-2.121.585-.585 1.535-.586 2.12 0L8 5.011l2.323-2.322z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled16;

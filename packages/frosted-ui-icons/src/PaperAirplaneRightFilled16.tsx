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
      data-fui-icon="PaperAirplaneRightFilled16"
      {...props}
    >
      <path
        d="M13.868 9.865c1.512-.783 1.512-2.945 0-3.728L4.49 1.277C2.474.231.28 2.327 1.228 4.39l1.317 2.858h4.69c.414 0 .75.336.75.75s-.336.75-.75.75H2.546l-1.32 2.865c-.95 2.062 1.248 4.158 3.262 3.114l9.38-4.862z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled16.category = 'Communication';

export default PaperAirplaneRightFilled16;

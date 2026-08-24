import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled20"
      {...props}
    >
      <path
        d="M17.523 12.43c1.97-1.021 1.97-3.838 0-4.858L5.54 1.36C2.92.003.064 2.728 1.297 5.409l1.65 3.587h6.32c.552 0 1 .447 1 1 0 .552-.448 1-1 1H2.95l-1.654 3.597c-1.232 2.68 1.624 5.405 4.243 4.047l11.984-6.21z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled20.category = 'Communication';

export default PaperAirplaneRightBoldFilled20;

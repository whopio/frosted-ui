import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightFilled20"
      {...props}
    >
      <path
        d="M17.656 12.208c1.79-.927 1.79-3.487 0-4.414L5.173 1.332C2.74.072.103 2.638 1.297 5.104l2.005 4.142H9.25c.415 0 .75.336.75.75s-.335.75-.75.75H3.305l-2.009 4.152c-1.192 2.466 1.443 5.03 3.876 3.772l12.484-6.462z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightFilled20.category = 'Communication';

export default PaperAirplaneRightFilled20;

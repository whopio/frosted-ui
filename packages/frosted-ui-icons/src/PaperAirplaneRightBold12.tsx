import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBold12"
      {...props}
    >
      <path
        d="M10.775 8.004c1.633-.835 1.633-3.17 0-4.005L3.502.275C1.525-.737-.648 1.247.182 3.307l1.079 2.68c.003.008.003.02 0 .028L.18 8.697c-.83 2.06 1.343 4.043 3.32 3.032l7.274-3.725zM9.863 5.78c.182.093.182.352 0 .445L2.59 9.95c-.33.168-.692-.162-.554-.505L3.02 7h2.233c.552 0 1-.448 1-1s-.448-1-1-1H3.019L2.037 2.56c-.138-.344.224-.674.554-.505l7.272 3.724z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRightBold12.category = 'Communication';

export default PaperAirplaneRightBold12;

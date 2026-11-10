import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneRightBoldFilled12"
      {...props}
    >
      <path
        d="M10.775 8.004c1.633-.835 1.633-3.17 0-4.005L3.502.275C1.525-.737-.648 1.247.182 3.307L.864 5h4.389c.552 0 1 .448 1 1s-.448 1-1 1H.864L.181 8.697c-.83 2.06 1.343 4.043 3.32 3.032l7.274-3.725z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled12.category = 'Communication';

export default PaperAirplaneRightBoldFilled12;

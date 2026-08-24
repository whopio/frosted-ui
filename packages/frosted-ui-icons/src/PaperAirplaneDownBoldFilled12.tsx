import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneDownBoldFilled12"
      {...props}
    >
      <path
        d="M3.997 10.777c.836 1.633 3.17 1.633 4.005 0l3.724-7.273c1.012-1.977-.972-4.15-3.031-3.32L7 .866v4.388c0 .552-.447 1-1 1-.552 0-1-.448-1-1V.866L3.304.183C1.244-.647-.739 1.526.272 3.503l3.725 7.274z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled12.category = 'Communication';

export default PaperAirplaneDownBoldFilled12;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBoldFilled12"
      {...props}
    >
      <path
        d="M3.997 1.226c.836-1.632 3.17-1.632 4.005 0L11.727 8.5c1.011 1.976-.973 4.149-3.032 3.32L7 11.137V6.75c0-.552-.447-1-1-1-.552 0-1 .448-1 1v4.388l-1.696.684C1.244 12.65-.739 10.477.272 8.5l3.725-7.275z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled12.category = 'Communication';

export default PaperAirplaneUpBoldFilled12;

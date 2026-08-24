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
        d="M3.997 1.226c.836-1.633 3.17-1.633 4.005 0L11.726 8.5c1.012 1.976-.972 4.149-3.031 3.32L7 11.137V6.75c0-.552-.447-1-1-1-.552 0-1 .448-1 1v4.388l-1.696.684C1.244 12.65-.739 10.477.272 8.5l3.725-7.275z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled12.category = 'Communication';

export default PaperAirplaneUpBoldFilled12;

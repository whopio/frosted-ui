import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpBoldFilled20"
      {...props}
    >
      <path
        d="M7.571 2.477c1.02-1.969 3.837-1.968 4.858 0l6.21 11.984c1.358 2.62-1.366 5.476-4.047 4.243l-3.587-1.65v-6.32c0-.552-.448-1-1-1s-1 .448-1 1v6.316l-3.598 1.655C2.727 19.937.003 17.08 1.36 14.462L7.571 2.477z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled20.category = 'Communication';

export default PaperAirplaneUpBoldFilled20;

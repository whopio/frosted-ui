import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.57152 17.5237C8.59193 19.4925 11.4084 19.4924 12.4289 17.5237L18.6399 5.54028C19.9976 2.92048 17.2728 0.0642128 14.592 1.29712L11.0051 2.94751V9.26685C11.0051 9.81913 10.5574 10.2668 10.0051 10.2668C9.45289 10.2668 9.00511 9.81908 9.00511 9.26685V2.95044L5.40746 1.29614C2.72671 0.0639153 0.00292522 2.91976 1.36058 5.53931L7.57152 17.5237Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled20.category = 'Communication';

export default PaperAirplaneDownBoldFilled20;

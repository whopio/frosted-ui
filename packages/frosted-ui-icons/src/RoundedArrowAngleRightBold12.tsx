import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBold12"
      {...props}
    >
      <path
        d="M4.5 12C2.013 12 0 9.984 0 7.5 0 5.014 2.014 3 4.5 3h4.085L7.292 1.707c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l3 3c.049.049.092.101.129.157l.044.073c.032.058.057.12.077.185.058.19.058.394 0 .585-.024.079-.058.154-.1.223-.041.068-.091.132-.15.19l-3 3c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.023 0-1.413L8.585 5H4.5C3.12 5 2 6.119 2 7.5 2 8.88 3.12 10 4.5 10h.75c.553 0 1 .447 1 1 0 .552-.447 1-1 1H4.5z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBold12.category = 'Arrows';

export default RoundedArrowAngleRightBold12;

import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftBoldFilled16"
      {...props}
    >
      <path
        d="M10 15c2.761 0 5-2.239 5-5 0-2.762-2.239-5-5-5H6.121l1.44-1.44c.585-.586.585-1.535 0-2.12-.586-.586-1.536-.586-2.122 0l-4 4C1.16 5.72 1 6.101 1 6.5s.158.779.44 1.06l3.75 3.75c.585.586 1.535.586 2.12 0 .586-.585.586-1.535 0-2.12L6.122 8H10c1.104 0 2 .895 2 2 0 1.104-.895 2-2 2H9c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5h1z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBoldFilled16.category = 'Arrows';

export default RoundedArrowAngleLeftBoldFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftBoldFilled20"
      {...props}
    >
      <path
        d="M12.5 19c3.59 0 6.5-2.91 6.5-6.5S16.09 6 12.5 6H6.121l2.44-2.44c.585-.585.585-1.535 0-2.12-.586-.586-1.536-.586-2.122 0l-5 5C1.16 6.72 1 7.102 1 7.5s.158.78.44 1.06l5 5c.585.586 1.535.586 2.12 0 .586-.585.586-1.535 0-2.12L6.122 9H12.5c1.933 0 3.5 1.567 3.5 3.5S14.433 16 12.5 16h-1.75c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5h1.75z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBoldFilled20.category = 'Arrows';

export default RoundedArrowAngleLeftBoldFilled20;

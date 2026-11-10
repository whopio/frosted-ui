import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeftBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeftBoldFilled16"
      {...props}
    >
      <path
        d="M3.939 8.438c.586-.586 1.535-.586 2.121 0 .566.566.584 1.471.055 2.06h7.384c.829 0 1.5.672 1.5 1.5 0 .829-.671 1.5-1.5 1.5H6.115c.53.589.514 1.496-.053 2.063-.586.585-1.535.585-2.121 0l-2.502-2.502c-.585-.586-.586-1.536 0-2.121l2.5-2.5zm6-7.998c.586-.586 1.535-.586 2.121 0l2.504 2.503c.586.586.586 1.536 0 2.122L12.06 7.568c-.586.586-1.535.586-2.121 0-.567-.567-.584-1.475-.052-2.064H2.5c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h7.387c-.532-.589-.515-1.497.052-2.064z"
        fill={color}
      />
    </svg>
  );
};

DoubleArrowRightLeftBoldFilled16.category = 'Arrows';

export default DoubleArrowRightLeftBoldFilled16;

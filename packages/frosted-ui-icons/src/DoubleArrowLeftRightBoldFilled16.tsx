import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightBoldFilled16"
      {...props}
    >
      <path
        d="M12.064 8.437c-.586-.585-1.535-.585-2.121 0-.567.567-.584 1.472-.055 2.061H2.503c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h7.385c-.53.589-.514 1.495.053 2.063.586.585 1.535.585 2.121 0l2.502-2.502c.585-.586.585-1.536 0-2.122l-2.5-2.5zm-6-7.998c-.586-.585-1.535-.585-2.121 0L1.439 2.943c-.586.586-.586 1.536 0 2.121l2.504 2.504c.586.586 1.535.586 2.121 0 .567-.567.584-1.475.052-2.064h7.387c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5H6.116c.532-.589.515-1.497-.052-2.065z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightBoldFilled16.category = 'Arrows';

export default DoubleArrowLeftRightBoldFilled16;

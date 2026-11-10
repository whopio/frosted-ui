import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBoldFilled16"
      {...props}
    >
      <path
        d="M7.386 3.607c-.583-.589-.579-1.538.01-2.121.588-.583 1.537-.579 2.12.01l5.495 5.542c.724.73.72 1.91-.011 2.634l-5.493 5.444c-.588.583-1.538.579-2.121-.01-.583-.588-.579-1.537.01-2.12l4.683-4.644-4.693-4.735zM.89 3.61c-.586-.586-.586-1.536 0-2.122.585-.585 1.535-.585 2.12 0l5.496 5.496c.727.727.727 1.906 0 2.633l-5.495 5.494c-.586.585-1.536.585-2.121 0-.586-.586-.586-1.536 0-2.121l4.69-4.689-4.69-4.691z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled16.category = 'Arrows';

export default DoubleChevronRightBoldFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronBoldFilled16"
      {...props}
    >
      <path
        d="M10.689 9.69c.585-.586 1.535-.586 2.12 0 .587.585.587 1.535 0 2.12l-3.75 3.75c-.28.282-.662.44-1.06.44-.397 0-.78-.158-1.06-.44l-3.75-3.75c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0L8 12.379l2.69-2.69zM7.999 0c.398 0 .78.158 1.06.44l3.75 3.75c.586.585.586 1.535 0 2.12-.585.586-1.535.586-2.12 0l-2.69-2.689-2.69 2.69c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L6.939.44C7.22.158 7.6 0 7.999 0z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronBoldFilled16.category = 'Arrows';

export default DoubleChevronBoldFilled16;

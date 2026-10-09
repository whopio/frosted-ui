import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronBoldFilled12"
      {...props}
    >
      <path
        d="M7.19 7.19c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12l-2.25 2.25c-.28.282-.663.44-1.061.44-.398 0-.78-.158-1.06-.44l-2.25-2.25c-.586-.585-.586-1.535 0-2.12.585-.586 1.536-.586 2.121 0L6 8.378 7.19 7.19zM6 0c.398 0 .78.158 1.06.44l2.25 2.25c.586.585.586 1.535 0 2.12-.585.586-1.535.586-2.12 0L6 3.623 4.812 4.811c-.585.585-1.536.585-2.122 0-.585-.586-.585-1.536 0-2.121L4.94.44c.28-.282.663-.44 1.06-.44z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronBoldFilled12.category = 'Arrows';

export default DoubleChevronBoldFilled12;

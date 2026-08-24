import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBoldFilled32"
      {...props}
    >
      <path
        d="M12.737 3.31c-.585-.586-.586-1.535 0-2.121.586-.586 1.536-.586 2.121 0l13.168 13.168c.91.91.91 2.386 0 3.296L14.858 30.817c-.586.585-1.535.586-2.12 0-.586-.586-.587-1.535 0-2.121l12.693-12.69L12.737 3.31zm-9 0c-.586-.586-.586-1.535 0-2.121.586-.586 1.535-.586 2.121 0l13.168 13.168c.91.91.91 2.386 0 3.296L5.858 30.817c-.586.585-1.535.585-2.12 0-.587-.586-.587-1.535 0-2.121l12.693-12.69L3.737 3.31z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled32.category = 'Arrows';

export default DoubleChevronRightBoldFilled32;

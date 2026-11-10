import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronLeftBoldFilled24"
      {...props}
    >
      <path
        d="M14.312 3.312c.586-.586.586-1.536 0-2.121-.586-.586-1.535-.586-2.121 0l-9.328 9.328c-.82.82-.82 2.149 0 2.969l9.328 9.324c.586.585 1.535.585 2.121 0 .586-.586.586-1.536 0-2.121l-8.69-8.688 8.69-8.691zm7 0c.586-.586.586-1.536 0-2.121-.586-.586-1.535-.586-2.121 0l-9.328 9.328c-.82.82-.82 2.149 0 2.969l9.328 9.324c.586.585 1.535.585 2.121 0 .586-.586.586-1.536 0-2.121l-8.69-8.688 8.69-8.691z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeftBoldFilled24.category = 'Arrows';

export default DoubleChevronLeftBoldFilled24;

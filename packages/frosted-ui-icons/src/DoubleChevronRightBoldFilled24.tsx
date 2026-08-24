import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronRightBoldFilled24"
      {...props}
    >
      <path
        d="M9.688 3.312c-.586-.586-.586-1.535 0-2.121.586-.586 1.535-.586 2.12 0l9.33 9.328c.819.82.819 2.15 0 2.969l-9.33 9.324c-.585.586-1.534.586-2.12 0-.586-.586-.586-1.535 0-2.121l8.69-8.688-8.69-8.691zm-7 0c-.586-.586-.586-1.535 0-2.121.586-.586 1.535-.586 2.12 0l9.33 9.328c.819.82.819 2.149 0 2.969l-9.33 9.324c-.585.586-1.534.586-2.12 0-.586-.586-.586-1.535 0-2.121l8.69-8.688-8.69-8.691z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightBoldFilled24.category = 'Arrows';

export default DoubleChevronRightBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpBoldFilled24"
      {...props}
    >
      <path
        d="M20.69 14.314c.585.586 1.535.586 2.12 0 .586-.586.587-1.536 0-2.121l-9.327-9.328c-.82-.82-2.15-.82-2.969 0L1.19 12.193c-.586.586-.586 1.535 0 2.12.586.586 1.535.586 2.12 0l8.688-8.69 8.692 8.69zm0 7c.585.586 1.535.586 2.12 0 .586-.586.587-1.535 0-2.121l-9.327-9.328c-.82-.82-2.15-.82-2.969 0L1.19 19.193c-.586.586-.586 1.535 0 2.12.586.586 1.535.587 2.12 0l8.688-8.69 8.692 8.69z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled24.category = 'Arrows';

export default DoubleChevronUpBoldFilled24;

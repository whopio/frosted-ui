import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpBoldFilled20"
      {...props}
    >
      <path
        d="M16.694 11.365c.585.586 1.535.586 2.12 0 .586-.586.586-1.535 0-2.12L11.4 1.828c-.773-.773-2.026-.772-2.8.001L1.19 9.244c-.586.586-.586 1.536 0 2.121.586.586 1.535.586 2.12 0L10 4.673l6.694 6.692zm0 7c.585.586 1.535.586 2.12 0 .586-.586.586-1.535 0-2.12L11.4 8.828c-.773-.773-2.026-.772-2.8.001l-7.41 7.414c-.586.586-.586 1.535 0 2.121.586.586 1.535.586 2.12 0L10 11.673l6.694 6.692z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled20.category = 'Arrows';

export default DoubleChevronUpBoldFilled20;

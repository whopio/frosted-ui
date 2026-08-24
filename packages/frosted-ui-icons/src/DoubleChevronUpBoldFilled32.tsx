import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpBoldFilled32"
      {...props}
    >
      <path
        d="M28.696 19.221c.586.586 1.535.586 2.121 0 .586-.585.586-1.535 0-2.12L17.65 3.931c-.91-.91-2.386-.91-3.296 0L1.19 17.1c-.585.586-.585 1.536 0 2.121.586.586 1.536.586 2.121 0L16 6.527l12.696 12.694zm0 9c.586.586 1.535.586 2.121 0 .586-.585.586-1.535 0-2.12L17.65 12.931c-.91-.91-2.386-.91-3.296 0L1.19 26.1c-.585.586-.585 1.536 0 2.121.586.586 1.536.586 2.121 0L16 15.527l12.696 12.694z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBoldFilled32.category = 'Arrows';

export default DoubleChevronUpBoldFilled32;

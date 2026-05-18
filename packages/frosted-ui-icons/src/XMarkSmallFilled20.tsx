import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.1151 5.11546C13.6033 4.6276 14.3956 4.62746 14.8837 5.11546C15.3716 5.60354 15.3715 6.39588 14.8837 6.88401L11.7675 10.0002L14.8837 13.1164C15.3713 13.6045 15.3713 14.396 14.8837 14.884C14.3956 15.3721 13.6033 15.3719 13.1151 14.884L9.99893 11.7678L6.88272 14.884C6.39461 15.3721 5.60331 15.372 5.11514 14.884C4.62705 14.3959 4.62701 13.6046 5.11514 13.1164L8.23135 10.0002L5.11514 6.88401C4.62698 6.39586 4.62698 5.60362 5.11514 5.11546C5.60323 4.62779 6.39467 4.62773 6.88272 5.11546L9.99893 8.23265L13.1151 5.11546Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallFilled20.category = 'Interface General';

export default XMarkSmallFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5218 7.72835C11.1314 7.33782 11.1314 6.70477 11.5218 6.31429C11.9123 5.92406 12.5454 5.92397 12.9359 6.31429L17.5824 10.9608C18.1679 11.5465 18.1678 12.4961 17.5824 13.0819L12.9359 17.7284C12.5454 18.1189 11.9124 18.1189 11.5218 17.7284C11.1314 17.3378 11.1314 16.7048 11.5218 16.3143L15.8148 12.0213L11.5218 7.72835ZM6.27184 7.72835C5.88143 7.33782 5.88135 6.70477 6.27184 6.31429C6.66234 5.92408 7.29546 5.92397 7.6859 6.31429L12.3324 10.9608C12.9179 11.5464 12.9178 12.4961 12.3324 13.0819L7.6859 17.7284C7.29538 18.1189 6.66236 18.1189 6.27184 17.7284C5.88143 17.3378 5.88136 16.7048 6.27184 16.3143L10.5648 12.0213L6.27184 7.72835Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallBold24.category = 'Arrows';

export default DoubleChevronRightSmallBold24;

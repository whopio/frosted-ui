import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.88108 5.49823C8.36917 5.01009 8.36915 4.21879 7.88108 3.73065C7.39291 3.24284 6.60155 3.24265 6.1135 3.73065L2.96604 6.87811C2.34801 7.49635 2.3481 8.49907 2.96604 9.11737L6.1135 12.2648C6.6016 12.7529 7.39291 12.7528 7.88108 12.2648C8.36923 11.7767 8.36923 10.9854 7.88108 10.4973L5.38206 7.99823L7.88108 5.49823ZM13.1311 5.49823C13.6192 5.01009 13.6191 4.21879 13.1311 3.73065C12.6429 3.24283 11.8516 3.24265 11.3635 3.73065L8.21604 6.87811C7.598 7.49635 7.59809 8.49907 8.21604 9.11737L11.3635 12.2648C11.8516 12.7529 12.6429 12.7528 13.1311 12.2648C13.6192 11.7767 13.6192 10.9854 13.1311 10.4973L10.6321 7.99823L13.1311 5.49823Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallFilled16.category = 'Arrows';

export default DoubleChevronLeftSmallFilled16;

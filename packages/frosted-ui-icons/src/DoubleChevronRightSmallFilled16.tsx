import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmallFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.11855 5.49823C7.63047 5.01009 7.63049 4.21879 8.11855 3.73065C8.60672 3.24284 9.39808 3.24265 9.88613 3.73065L13.0336 6.87811C13.6516 7.49635 13.6515 8.49907 13.0336 9.11737L9.88613 12.2648C9.39803 12.7529 8.60672 12.7528 8.11855 12.2648C7.6304 11.7767 7.63041 10.9854 8.11855 10.4973L10.6176 7.99823L8.11855 5.49823ZM2.86855 5.49823C2.38047 5.01009 2.38049 4.21879 2.86855 3.73065C3.35672 3.24283 4.14808 3.24265 4.63613 3.73065L7.78359 6.87811C8.40163 7.49635 8.40154 8.49907 7.78359 9.11737L4.63613 12.2648C4.14803 12.7529 3.35672 12.7528 2.86855 12.2648C2.3804 11.7767 2.38041 10.9854 2.86855 10.4973L5.36757 7.99823L2.86855 5.49823Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmallFilled16.category = 'Arrows';

export default DoubleChevronRightSmallFilled16;

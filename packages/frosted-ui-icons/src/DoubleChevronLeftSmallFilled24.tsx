import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4094 7.87714C12.896 7.38801 12.8943 6.59659 12.4055 6.10957C11.9164 5.62267 11.125 5.6247 10.6379 6.11347L6.00994 10.76C5.32984 11.4428 5.32984 12.5478 6.00994 13.2307L10.6379 17.8771C11.125 18.3661 11.9163 18.368 12.4055 17.8811C12.8942 17.3939 12.8961 16.6025 12.4094 16.1135L8.3078 11.9953L12.4094 7.87714ZM18.1359 7.87714C18.6229 7.38799 18.6211 6.59668 18.132 6.10957C17.6428 5.62279 16.8515 5.62447 16.3644 6.11347L11.7365 10.76C11.0565 11.4427 11.0566 12.5478 11.7365 13.2307L16.3644 17.8771C16.8515 18.3662 17.6429 18.368 18.132 17.8811C18.6211 17.3939 18.6229 16.6026 18.1359 16.1135L14.0344 11.9953L18.1359 7.87714Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmallFilled24.category = 'Arrows';

export default DoubleChevronLeftSmallFilled24;

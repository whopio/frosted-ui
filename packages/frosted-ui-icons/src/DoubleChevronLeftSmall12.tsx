import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.77869 3.9281C6.07135 3.63518 6.07151 3.16037 5.77869 2.86755C5.48584 2.57511 5.01093 2.57501 4.71814 2.86755L2.29529 5.29138C1.90488 5.68181 1.90506 6.3149 2.29529 6.70544L4.71814 9.12829C5.01104 9.42118 5.4858 9.42118 5.77869 9.12829C6.07144 8.83539 6.07154 8.36059 5.77869 8.06774L3.70935 5.99841L5.77869 3.9281ZM9.77869 3.9281C10.0714 3.63518 10.0715 3.16037 9.77869 2.86755C9.48584 2.57511 9.01093 2.57501 8.71814 2.86755L6.29529 5.29138C5.90488 5.68181 5.90506 6.3149 6.29529 6.70544L8.71814 9.12829C9.01104 9.42118 9.4858 9.42118 9.77869 9.12829C10.0714 8.83539 10.0715 8.36059 9.77869 8.06774L7.70935 5.99841L9.77869 3.9281Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall12.category = 'Arrows';

export default DoubleChevronLeftSmall12;

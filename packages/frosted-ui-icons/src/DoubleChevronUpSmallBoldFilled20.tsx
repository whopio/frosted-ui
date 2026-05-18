import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.1062 10.3069C13.6918 10.8926 14.6414 10.8924 15.2273 10.3069C15.8129 9.72124 15.8128 8.77165 15.2273 8.18579L11.3562 4.31177C10.6076 3.56283 9.39283 3.56279 8.64426 4.31177L4.77317 8.18579C4.18769 8.77163 4.18757 9.72124 4.77317 10.3069C5.359 10.8924 6.3086 10.8925 6.89426 10.3069L9.99973 7.19946L13.1062 10.3069ZM13.1062 15.8098C13.6918 16.3955 14.6414 16.3954 15.2273 15.8098C15.8129 15.2242 15.8128 14.2746 15.2273 13.6887L11.3562 9.8147C10.6076 9.06574 9.39284 9.06572 8.64426 9.8147L4.77317 13.6887C4.18764 14.2746 4.18754 15.2242 4.77317 15.8098C5.35901 16.3953 6.30861 16.3955 6.89426 15.8098L9.99973 12.7024L13.1062 15.8098Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled20.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled20;

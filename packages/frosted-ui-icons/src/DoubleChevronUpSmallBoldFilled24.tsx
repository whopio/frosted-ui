import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUpSmallBoldFilled24"
      {...props}
    >
      <path
        d="M15.942 12.581c.587.585 1.536.583 2.12-.004.585-.586.583-1.536-.003-2.12l-4.648-4.63c-.78-.777-2.041-.777-2.822 0l-4.647 4.63c-.587.584-.589 1.534-.004 2.12.584.587 1.534.589 2.12.004L12 8.656l3.942 3.925zm0 5.727c.587.584 1.536.583 2.12-.004.585-.587.584-1.537-.003-2.121l-4.648-4.63c-.78-.776-2.041-.776-2.822 0l-4.647 4.63c-.587.584-.589 1.534-.004 2.12.584.588 1.534.59 2.12.005L12 14.383l3.942 3.925z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled24;

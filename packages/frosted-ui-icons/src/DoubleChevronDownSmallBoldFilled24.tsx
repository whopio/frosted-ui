import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronDownSmallBoldFilled24"
      {...props}
    >
      <path
        d="M15.942 11.41c.587-.585 1.536-.583 2.12.003.585.587.583 1.537-.003 2.121l-4.648 4.63c-.78.776-2.041.776-2.822 0l-4.647-4.63c-.587-.584-.589-1.534-.004-2.12.584-.587 1.534-.589 2.12-.005L12 15.334l3.942-3.925zm0-5.727c.587-.585 1.536-.583 2.12.004.585.587.584 1.536-.003 2.12l-4.648 4.63c-.78.777-2.041.777-2.822 0l-4.647-4.63c-.587-.584-.589-1.533-.004-2.12.584-.587 1.534-.589 2.12-.004L12 9.608l3.942-3.925z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronDownSmallBoldFilled24;

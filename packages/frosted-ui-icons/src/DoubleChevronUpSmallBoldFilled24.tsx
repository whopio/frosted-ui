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
        d="M15.942 12.581c.587.584 1.537.583 2.121-.004.584-.587.582-1.536-.004-2.12l-4.647-4.63c-.78-.777-2.042-.777-2.823 0l-4.647 4.63c-.587.584-.589 1.533-.004 2.12.585.587 1.534.588 2.121.004l3.942-3.925 3.94 3.925zm0 5.727c.587.584 1.536.582 2.121-.004.584-.587.583-1.537-.004-2.121l-4.647-4.63c-.78-.776-2.042-.776-2.823 0l-4.647 4.63c-.587.584-.589 1.534-.004 2.12.585.587 1.534.59 2.121.005l3.942-3.925 3.94 3.925z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled24.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M29.5371 12.2556C32.6961 13.8144 32.696 18.3197 29.5371 19.8787L7.67285 30.6648C3.87587 32.538 -0.197079 28.6642 1.4834 24.7781L4.86426 16.9597C4.88448 16.9129 4.90107 16.8649 4.91797 16.8171H14.0674C14.4815 16.817 14.8174 16.4813 14.8174 16.0671C14.8172 15.6531 14.4814 15.3173 14.0674 15.3171H4.91797C4.90107 15.2694 4.88449 15.2214 4.86426 15.1746L1.4834 7.3562C-0.196964 3.47013 3.87591 -0.403678 7.67285 1.46948L29.5371 12.2556Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperAirplaneFilled32;

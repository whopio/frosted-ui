import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRight24"
      {...props}
    >
      <path
        d="M19.134 1.273c2.22-.706 4.313 1.387 3.607 3.607l-5.324 16.724c-.973 3.055-5.282 3.09-6.304.052l-2.02-6.006c-.116-.342-.385-.61-.726-.726L2.353 12.9c-3.038-1.023-3.002-5.332.052-6.304l16.73-5.323zm2.177 3.151c.337-1.06-.662-2.059-1.722-1.722L2.861 8.025c-1.673.533-1.693 2.893-.029 3.453l6.013 2.024c.146.05.286.111.42.183l3.926-3.927c.293-.293.768-.292 1.061 0 .293.293.293.768 0 1.061l-3.925 3.925c.074.136.137.279.187.428l2.02 6.006c.56 1.664 2.92 1.645 3.453-.028l5.324-16.726z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight24.category = 'Communication';

export default PaperAirplaneUpRight24;

import * as React from 'react';
import { IconProps } from './types';

export const SplitDownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitDownBoldFilled24"
      {...props}
    >
      <path
        d="M1.04 18.113c-.49.669-.345 1.607.323 2.097l3.75 2.75c.528.387 1.246.387 1.774 0l3.75-2.75c.668-.49.813-1.428.323-2.097-.49-.667-1.429-.812-2.097-.323l-1.363 1v-1.146c0-1.28.699-2.458 1.821-3.071l2.932-1.604c1.02.552 2.054 1.115 2.946 1.604 1.11.61 1.8 1.779 1.8 3.052v1.165l-1.362-1c-.668-.49-1.607-.344-2.097.323-.49.669-.345 1.607.323 2.097l3.75 2.75c.528.387 1.246.387 1.774 0l3.75-2.75c.668-.49.812-1.428.323-2.097-.49-.667-1.429-.812-2.097-.323l-1.363 1v-1.165c0-2.362-1.282-4.543-3.36-5.681-.874-.48-1.886-1.031-2.89-1.575V7.413c1.182-.561 2-1.767 2-3.163 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.396.817 2.602 2 3.163v2.96l-2.868 1.568C5.797 13.08 4.5 15.268 4.5 17.644v1.146l-1.363-1c-.668-.49-1.607-.344-2.097.323z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitDownBoldFilled24.category = 'Arrows';

export default SplitDownBoldFilled24;

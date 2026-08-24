import * as React from 'react';
import { IconProps } from './types';

export const SplitUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitUpBoldFilled24"
      {...props}
    >
      <path
        d="M1.04 5.887C.55 5.219.695 4.28 1.363 3.79l3.75-2.75c.528-.387 1.246-.387 1.774 0l3.75 2.75c.668.49.813 1.429.323 2.097-.49.668-1.429.813-2.097.323l-1.363-1v1.147c0 1.279.699 2.457 1.821 3.07l2.932 1.604c1.02-.552 2.054-1.115 2.946-1.604 1.11-.609 1.8-1.778 1.8-3.052V5.21l-1.362 1c-.668.49-1.607.345-2.097-.323-.49-.668-.345-1.607.323-2.097l3.75-2.75c.528-.387 1.246-.387 1.774 0l3.75 2.75c.668.49.812 1.429.323 2.097-.49.668-1.429.813-2.097.323L20 5.21v1.165c0 2.362-1.282 4.543-3.36 5.682-.874.48-1.886 1.03-2.89 1.574v2.956c1.182.562 2 1.767 2 3.163 0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5c0-1.396.817-2.601 2-3.163v-2.96L7.882 12.06C5.797 10.92 4.5 8.733 4.5 6.357V5.21l-1.363 1c-.668.49-1.607.345-2.097-.323z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitUpBoldFilled24.category = 'Arrows';

export default SplitUpBoldFilled24;

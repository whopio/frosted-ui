import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUp24"
      {...props}
    >
      <path
        d="M12.22 5.468c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0l3.97-3.967v20.688c0 .415.335.75.75.75.413 0 .75-.335.75-.75V2.561l3.967 3.968c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L18.53.22c-.293-.293-.768-.293-1.061 0L12.22 5.468zm-12 12.003c-.293.293-.293.768 0 1.06l5.249 5.249c.293.292.768.292 1.06 0l5.249-5.248c.292-.293.292-.768 0-1.06-.293-.294-.768-.294-1.06 0l-3.969 3.967V.75C6.75.336 6.413 0 6 0s-.75.336-.75.75V21.44L1.281 17.47c-.293-.293-.768-.293-1.061 0z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowDownUp24.category = 'Arrows';

export default DoubleArrowDownUp24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowRightLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowRightLeft24"
      {...props}
    >
      <path
        d="M5.468 12.22c.292-.292.767-.292 1.06 0 .293.293.293.768 0 1.061L2.56 17.25h20.688c.414 0 .75.335.75.75 0 .414-.336.75-.75.75H2.56l3.968 3.967c.293.293.293.768 0 1.06-.293.293-.768.293-1.06 0L.22 18.53c-.293-.293-.293-.768 0-1.06l5.248-5.25zM17.47.221c.293-.293.768-.293 1.06 0l5.248 5.249c.293.293.293.767 0 1.06l-5.247 5.248c-.293.293-.768.293-1.061 0-.293-.293-.293-.768 0-1.06l3.968-3.968H.75C.336 6.75 0 6.414 0 6s.336-.75.75-.75h20.688L17.47 1.281c-.293-.292-.293-.767 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowRightLeft24.category = 'Arrows';

export default DoubleArrowRightLeft24;

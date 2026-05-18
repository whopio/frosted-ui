import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.33066 0.277079C7.69914 -0.0901704 8.30107 -0.0902355 8.66952 0.277079L8.74472 0.361063L13.5807 6.45872C14.0745 7.08134 13.6312 7.99964 12.8365 7.99973H11.4781L14.5348 12.5173C14.9614 13.1481 14.5092 13.9996 13.7476 13.9997H8.75058V15.2488C8.75058 15.663 8.41479 15.9988 8.00058 15.9988C7.58649 15.9986 7.25058 15.6629 7.25058 15.2488V13.9997H2.25253C1.49089 13.9997 1.03879 13.1482 1.46542 12.5173L4.52206 7.99973H3.16464C2.36998 7.99973 1.92681 7.08236 2.4205 6.4597L7.25546 0.361063L7.33066 0.277079Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PineTreeFilled16.category = 'Nature & Weather';

export default PineTreeFilled16;

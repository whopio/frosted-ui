import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 3.75C1.44775 3.75004 1 4.19774 1 4.75V13.375C1 14.9628 2.28722 16.25 3.875 16.25H19.4854L16.8135 18.7734C16.4122 19.1527 16.3943 19.7851 16.7734 20.1865C17.1527 20.5879 17.7851 20.6057 18.1865 20.2266L22.6865 15.9766C22.8864 15.7877 23 15.525 23 15.25C23 14.9749 22.8864 14.7123 22.6865 14.5234L18.1865 10.2734C17.7851 9.89432 17.1527 9.91214 16.7734 10.3135C16.3943 10.7149 16.4122 11.3473 16.8135 11.7266L19.4854 14.25H3.875C3.39179 14.25 3 13.8582 3 13.375V4.75C3 4.19771 2.55228 3.75 2 3.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowDownAngleRightBold24.category = 'Arrows';

export default ArrowDownAngleRightBold24;

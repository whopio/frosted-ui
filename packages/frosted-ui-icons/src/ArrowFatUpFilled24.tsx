import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.5001 13H20.7071C21.8548 13 22.4587 11.6391 21.6886 10.7881L13.4073 1.63672C12.6541 0.804443 11.3461 0.804441 10.5929 1.63672L2.31161 10.7881C1.54151 11.6391 2.14536 13 3.29306 13H6.50009V20.8154C6.50009 22.0217 7.47841 23 8.68466 23H15.3155C16.5218 23 17.5001 22.0217 17.5001 20.8154V13Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpFilled24.category = 'Arrows';

export default ArrowFatUpFilled24;

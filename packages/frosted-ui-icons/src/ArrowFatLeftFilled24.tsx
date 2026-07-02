import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13 17.5001V20.7071C13 21.8548 11.6391 22.4587 10.7881 21.6886L1.63672 13.4073C0.804443 12.6541 0.804441 11.3461 1.63672 10.5929L10.7881 2.31161C11.6391 1.54151 13 2.14536 13 3.29306V6.50009L20.8154 6.50009C22.0217 6.50009 23 7.47841 23 8.68466V15.3155C23 16.5218 22.0217 17.5001 20.8154 17.5001H13Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled24.category = 'Arrows';

export default ArrowFatLeftFilled24;

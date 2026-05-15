import * as React from 'react';
import { IconProps } from './types';

export const Pulse20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M18.4774 5.46338C18.7735 5.17416 19.2485 5.17923 19.538 5.4751C19.8274 5.77113 19.822 6.24603 19.5262 6.53565L12.4247 13.479C11.9875 13.9065 11.2886 13.9065 10.8514 13.479L6.7284 9.44776L1.52625 14.5356C1.23012 14.8252 0.755294 14.82 0.465701 14.5239C0.176239 14.2278 0.181383 13.7529 0.47742 13.4634L5.94226 8.11963L6.02723 8.04444C6.43652 7.71731 7.02125 7.71731 7.43055 8.04444L7.51551 8.11963L11.6376 12.1499L18.4774 5.46338Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Pulse20.category = 'Stats & Charts';

export default Pulse20;

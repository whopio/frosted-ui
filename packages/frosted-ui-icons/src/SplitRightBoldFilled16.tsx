import * as React from 'react';
import { IconProps } from './types';

export const SplitRightBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SplitRightBoldFilled16"
      {...props}
    >
      <path
        d="M11.33 15.433c.653.509 1.595.391 2.104-.262l1.75-2.25c.42-.542.42-1.3 0-1.842l-1.75-2.25c-.509-.654-1.451-.771-2.105-.263-.536.417-.711 1.126-.477 1.728-.24-.14-.442-.345-.576-.6l-.879-1.687c.307-.579.615-1.164.881-1.678.134-.258.332-.466.569-.61-.227.6-.05 1.3.482 1.714.654.509 1.596.391 2.105-.262l1.75-2.25c.42-.542.42-1.3 0-1.842l-1.75-2.25c-.509-.654-1.451-.771-2.105-.263-.614.478-.755 1.337-.35 1.982-1.433.209-2.691 1.1-3.366 2.402-.248.48-.53 1.017-.811 1.55H5.619c-.04 0-.08.004-.119.007-.456-.61-1.18-1.007-2-1.007C2.12 5.5 1 6.62 1 8s1.12 2.5 2.5 2.5c.82 0 1.544-.397 2-1.006.04.003.079.006.12.006h1.173l.823 1.579c.677 1.299 1.935 2.175 3.36 2.376-.403.644-.26 1.502.353 1.978z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

SplitRightBoldFilled16.category = 'Arrows';

export default SplitRightBoldFilled16;

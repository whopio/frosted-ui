import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M27.9395 1.93958C28.5252 1.3538 29.4748 1.3538 30.0605 1.93958C30.6462 2.52537 30.6463 3.47492 30.0605 4.06067L18.1211 16.0001L30.0605 27.9396C30.6462 28.5254 30.6463 29.4749 30.0605 30.0607C29.4748 30.6464 28.5252 30.6463 27.9395 30.0607L16 18.1212L4.06055 30.0607C3.4748 30.6464 2.52525 30.6463 1.93945 30.0607C1.35367 29.4749 1.35367 28.5254 1.93945 27.9396L13.8789 16.0001L1.93945 4.06067C1.35367 3.47488 1.35367 2.52536 1.93945 1.93958C2.52524 1.3538 3.47476 1.35379 4.06055 1.93958L16 13.879L27.9395 1.93958Z"
        fill={color}
      />
    </svg>
  );
};

XMarkBoldFilled32.category = 'Interface General';

export default XMarkBoldFilled32;

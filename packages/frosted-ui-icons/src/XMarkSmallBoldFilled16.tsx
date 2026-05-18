import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.93934 3.93856C10.5251 3.35344 11.4748 3.35311 12.0604 3.93856C12.6459 4.52425 12.6458 5.47488 12.0604 6.06063L10.121 8.00009L12.0604 9.93954C12.6458 10.5252 12.6458 11.4749 12.0604 12.0606C11.4748 12.6463 10.5252 12.6461 9.93934 12.0606L7.99891 10.1212L6.05946 12.0606C5.47373 12.6464 4.52416 12.6463 3.93836 12.0606C3.3527 11.4748 3.35262 10.5253 3.93836 9.93954L5.87782 8.00009L3.93836 6.06063C3.35258 5.47485 3.35258 4.52435 3.93836 3.93856C4.5241 3.35319 5.47376 3.35313 6.05946 3.93856L7.99891 5.87899L9.93934 3.93856Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmallBoldFilled16.category = 'Interface General';

export default XMarkSmallBoldFilled16;

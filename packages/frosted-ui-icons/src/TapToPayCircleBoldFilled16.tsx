import * as React from 'react';
import { IconProps } from './types';

export const TapToPayCircleBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TapToPayCircleBoldFilled16"
      {...props}
    >
      <path
        d="M8 .525c4.128 0 7.475 3.347 7.476 7.475 0 4.128-3.348 7.476-7.476 7.476S.526 12.128.525 8C.525 3.872 3.872.526 8 .525zm2.505 3.699c-.216-.417-.729-.58-1.146-.365-.416.216-.58.729-.364 1.146.91 1.758.91 4.233 0 5.991-.215.417-.052.93.364 1.146.417.215.93.052 1.146-.365 1.162-2.248 1.162-5.305 0-7.553zm-2.19 1.175c-.213-.418-.725-.585-1.143-.373-.418.213-.585.725-.373 1.143.556 1.094.556 2.566 0 3.661-.213.419-.046.93.373 1.144.418.212.93.045 1.142-.373.803-1.579.802-3.623 0-5.202zm-2.13 1.128c-.181-.433-.679-.637-1.112-.457-.433.181-.637.678-.457 1.112.208.498.208 1.14 0 1.637-.18.434.024.932.457 1.113.433.18.93-.026 1.112-.458.382-.917.382-2.03 0-2.947z"
        fill={color}
      />
    </svg>
  );
};

TapToPayCircleBoldFilled16.category = 'Money & Shopping';

export default TapToPayCircleBoldFilled16;

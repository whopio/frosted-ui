import * as React from 'react';
import { IconProps } from './types';

export const ThumbUpFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.98209 4.625H1.875C1.18466 4.625 0.625 5.18463 0.625 5.875V9.625C0.625 10.3154 1.18466 10.875 1.875 10.875H8.711C9.82295 10.875 10.7681 10.0628 10.9354 8.96349L11.3539 6.21348C11.5611 4.85168 10.507 3.625 9.12945 3.625H7.38404L7.5369 2.6446C7.70272 1.58108 6.87708 0.625 5.8055 0.625C5.33856 0.625 4.9085 0.885463 4.69367 1.30255L2.98209 4.625ZM2.625 9.375V6.125H2.125V9.375H2.625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ThumbUpFilled12;

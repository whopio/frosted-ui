import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.00029 1.24999C0.448177 1.25018 0.000301358 1.69782 0.000301358 2.24998V6.31244C0.000301358 7.38236 0.867905 8.24972 1.93778 8.24992H8.62814L7.8469 9.05167C7.46169 9.44699 7.46949 10.0802 7.86448 10.4657C8.25979 10.8511 8.89295 10.8432 9.27853 10.4481L11.716 7.94816C12.0947 7.55979 12.0947 6.94006 11.716 6.55169L9.27853 4.05172C8.89295 3.65665 8.25979 3.64871 7.86448 4.03414C7.46949 4.41965 7.46169 5.05287 7.8469 5.44819L8.62814 6.24994H2.00028V2.24998C2.00028 1.6977 1.55257 1.24999 1.00029 1.24999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowDownAngleRightBold12.category = 'Arrows';

export default ArrowDownAngleRightBold12;

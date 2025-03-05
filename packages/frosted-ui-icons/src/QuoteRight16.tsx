import * as React from 'react';
import { IconProps } from './types';

export const QuoteRight16 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M4.32661 3.33334C2.68557 3.33334 1.33337 4.63347 1.33337 6.2639 1.33337 7.89434 2.68557 9.19448 4.32661 9.19448 4.95261 9.19448 5.53659 9.00528 6.01949 8.68074 5.88371 9.04001 5.70837 9.35401 5.50245 9.63781 4.91823 10.443 4.0594 11.0496 2.98561 11.7474 2.75408 11.8979 2.68837 12.2076 2.83884 12.4391 2.98932 12.6707 3.29901 12.7364 3.53055 12.5859 4.59383 11.8949 5.60493 11.1993 6.31185 10.2251 7.03424 9.22941 7.41137 7.98628 7.31984 6.24996 7.31217 4.62607 5.96298 3.33334 4.32661 3.33334zM11.6599 3.33334C10.0188 3.33334 8.66663 4.63347 8.66663 6.2639 8.66663 7.89434 10.0188 9.19448 11.6599 9.19448 12.2859 9.19448 12.8698 9.00528 13.3528 8.68074 13.217 9.04001 13.0416 9.35401 12.8357 9.63781 12.2515 10.443 11.3926 11.0496 10.3189 11.7474 10.0874 11.8979 10.0216 12.2076 10.1721 12.4391 10.3226 12.6707 10.6323 12.7364 10.8638 12.5859 11.9271 11.8949 12.9382 11.1993 13.6451 10.2251 14.3675 9.22941 14.7446 7.98628 14.6531 6.24996 14.6454 4.62607 13.2962 3.33334 11.6599 3.33334z"
        fill={color}
      />
    </svg>
  );
};

export default QuoteRight16;

import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftBold16"
      {...props}
    >
      <path
        d="M9.998 15C12.761 15 15 12.76 15 9.998c0-2.763-2.24-5.002-5.002-5.002H4.42l2.289-2.29c.39-.39.39-1.023 0-1.413-.39-.39-1.024-.39-1.414 0L1.293 5.295c-.188.187-.293.442-.293.707 0 .265.106.52.293.707l4.002 4.002c.39.39 1.023.39 1.414 0 .39-.39.39-1.024 0-1.414l-2.3-2.301h5.589C11.656 6.996 13 8.34 13 9.998 13 11.656 11.656 13 9.998 13H8.753c-.552 0-1 .448-1 1s.448 1 1 1h1.245z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold16.category = 'Arrows';

export default RoundedArrowAngleLeftBold16;

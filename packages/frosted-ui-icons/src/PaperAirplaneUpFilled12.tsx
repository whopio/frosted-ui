import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.22208 1.09082C4.96519 -0.360942 7.03979 -0.361061 7.78262 1.09082L11.7572 8.85937C12.6806 10.6645 10.8205 12.6274 8.96817 11.8027L6.75333 10.8164V6.75C6.75333 6.33578 6.41754 6 6.00333 6C5.58932 6.00024 5.25333 6.33593 5.25333 6.75V10.8164L3.03262 11.8047C1.18021 12.6285 -0.678984 10.6651 0.244539 8.86035L4.22208 1.09082Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpFilled12.category = 'Communication';

export default PaperAirplaneUpFilled12;

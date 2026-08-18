import * as React from 'react';
import { IconProps } from './types';

export const TrophyBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrophyBoldFilled24"
      {...props}
    >
      <path
        d="M16.0264 1C17.5934 1.00003 18.8758 2.21223 18.9902 3.75H21C22.1046 3.75 23 4.64543 23 5.75V8.75C23 10.9591 21.2091 12.75 19 12.75H18.7793C18.0831 15.4548 15.8108 17.5246 13 17.9268V21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H11V17.9268C8.18915 17.5246 5.91688 15.4548 5.2207 12.75H5C2.79086 12.75 1 10.9591 1 8.75V5.75C1 4.64543 1.89543 3.75 3 3.75H5.00977C5.12418 2.21223 6.40662 1.00003 7.97363 1H16.0264ZM3 8.75C3 9.85457 3.89543 10.75 5 10.75V5.75H3V8.75ZM19 10.75C20.1046 10.75 21 9.85457 21 8.75V5.75H19V10.75Z"
        fill={color}
      />
    </svg>
  );
};

TrophyBoldFilled24.category = 'Objects';

export default TrophyBoldFilled24;

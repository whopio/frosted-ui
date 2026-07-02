import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.0001 16.5858C19 17.919 17.9193 18.9998 16.5861 18.9999C15.9458 18.9999 15.3318 18.7455 14.879 18.2929L11.4484 14.8622L9.56263 18.0067C8.64765 19.5314 6.36985 19.2996 5.7804 17.622L1.19642 4.5741C0.45974 2.47671 2.47696 0.459501 4.57435 1.19617L17.6222 5.78016C19.2999 6.3696 19.5316 8.64741 18.007 9.56238L14.8624 11.4481L18.2931 14.8788C18.7458 15.3315 19.0001 15.9456 19.0001 16.5858Z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled20.category = 'Arrows';

export default CursorBoldFilled20;

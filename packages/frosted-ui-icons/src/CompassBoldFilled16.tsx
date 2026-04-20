import * as React from 'react';
import { IconProps } from './types';

export const CompassBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM12.0205 5.7666C12.5202 4.66668 11.4401 3.53625 10.3398 3.93555L10.2334 3.97949L6.87207 5.50684C6.26699 5.78194 5.78197 6.26701 5.50684 6.87207L3.97949 10.2334C3.46356 11.3689 4.63112 12.5364 5.7666 12.0205L9.12793 10.4932C9.733 10.218 10.2181 9.73302 10.4932 9.12793L12.0205 5.7666Z"
        fill={color}
      />
    </svg>
  );
};

CompassBoldFilled16.category = 'Interface General';

export default CompassBoldFilled16;

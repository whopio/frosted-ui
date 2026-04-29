import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM5.95801 8.91699C5.36003 8.91717 4.87518 9.40186 4.875 10C4.8752 10.5981 5.36004 11.0838 5.95801 11.084C6.55612 11.084 7.04179 10.5982 7.04199 10C7.04182 9.40175 6.55614 8.91699 5.95801 8.91699ZM10 8.91699C9.40193 8.91717 8.91717 9.40193 8.91699 10C8.91716 10.5981 9.40192 11.0838 10 11.084C10.5982 11.084 11.0838 10.5982 11.084 10C11.0838 9.40182 10.5982 8.91699 10 8.91699ZM14.0381 8.91699C13.44 8.91717 12.9553 9.40193 12.9551 10C12.9553 10.5981 13.44 11.0838 14.0381 11.084C14.6363 11.084 15.1219 10.5982 15.1221 10C15.1219 9.40182 14.6363 8.91699 14.0381 8.91699Z"
        fill={color}
      />
    </svg>
  );
};

ThreeDotsCircleFilled20.category = 'Interface General';

export default ThreeDotsCircleFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowUp20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 2C10.2049 2.00002 10.4015 2.08418 10.543 2.23242L15.793 7.73242C16.0786 8.03205 16.067 8.50709 15.7676 8.79297C15.4679 9.0786 14.9929 9.06704 14.707 8.76758L10.75 4.62207V17.25C10.75 17.6642 10.4142 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25V4.62207L5.29297 8.76758C5.0071 9.06706 4.53207 9.07857 4.23242 8.79297C3.93292 8.50708 3.92139 8.03207 4.20703 7.73242L9.45703 2.23242C9.59855 2.08419 9.79506 2 10 2Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp20;

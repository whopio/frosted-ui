import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.27535 11.7917H3.12533C2.25089 11.7917 1.54199 11.0828 1.54199 10.2084V3.95837C1.54199 3.0839 2.25089 2.37504 3.12533 2.37504H14.5187C16.1248 2.37504 17.49 3.54829 17.7316 5.13612L18.4291 9.71945C18.7284 11.6865 17.2058 13.4584 15.2161 13.4584H11.7231L12.0678 15.6694C12.2966 17.1372 11.1569 18.4584 9.67616 18.4584C9.08439 18.4584 8.53956 18.1282 8.2676 17.6001L5.27535 11.7917ZM4.87533 3.87504V10.2917H3.12533C3.0793 10.2917 3.04199 10.2544 3.04199 10.2084V3.95837C3.04199 3.91235 3.0793 3.87504 3.12533 3.87504H4.87533Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ThumbDownFilled20;

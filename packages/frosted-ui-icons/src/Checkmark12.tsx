import * as React from 'react';
import { IconProps } from './types';

export const Checkmark12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.7196 1.96985C11.0125 1.67702 11.4873 1.67714 11.7802 1.96985C12.0727 2.26278 12.0729 2.73762 11.7802 3.0304L4.53016 10.2804C4.3896 10.4209 4.19863 10.5 3.99989 10.5001C3.80124 10.5001 3.61017 10.4208 3.46962 10.2804L0.219616 7.0304C-0.0732411 6.73754 -0.0731698 6.26276 0.219616 5.96985C0.51251 5.67696 0.98727 5.67696 1.28016 5.96985L3.99989 8.68958L10.7196 1.96985Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Checkmark12.category = 'Checkmarks';

export default Checkmark12;

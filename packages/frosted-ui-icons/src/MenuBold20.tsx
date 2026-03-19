import * as React from 'react';
import { IconProps } from './types';

export const MenuBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H18ZM18 9C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H2C1.44772 11 1 10.5523 1 10C1 9.44772 1.44772 9 2 9H18ZM18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H2C1.44772 5 1 4.55228 1 4C1 3.44772 1.44772 3 2 3H18Z"
        fill={color}
      />
    </svg>
  );
};

MenuBold20.category = 'Product Icons';

export default MenuBold20;

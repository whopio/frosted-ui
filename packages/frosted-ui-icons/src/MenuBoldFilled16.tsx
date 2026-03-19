import * as React from 'react';
import { IconProps } from './types';

export const MenuBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.25 12C15.0784 12 15.75 12.6716 15.75 13.5C15.75 14.3284 15.0784 15 14.25 15H1.75C0.921573 15 0.25 14.3284 0.25 13.5C0.25 12.6716 0.921573 12 1.75 12H14.25ZM14.25 6.5C15.0784 6.5 15.75 7.17157 15.75 8C15.75 8.82843 15.0784 9.5 14.25 9.5H1.75C0.921573 9.5 0.25 8.82843 0.25 8C0.25 7.17157 0.921573 6.5 1.75 6.5H14.25ZM14.25 1C15.0784 1 15.75 1.67157 15.75 2.5C15.75 3.32843 15.0784 4 14.25 4H1.75C0.921573 4 0.25 3.32843 0.25 2.5C0.25 1.67157 0.921573 1 1.75 1H14.25Z"
        fill={color}
      />
    </svg>
  );
};

MenuBoldFilled16.category = 'Product Icons';

export default MenuBoldFilled16;

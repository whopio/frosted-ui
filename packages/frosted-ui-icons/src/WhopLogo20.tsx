import * as React from 'react';
import { IconProps } from './types';

export const WhopLogo20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WhopLogo20"
      {...props}
    >
      <path
        d="M17.42 4.876c1.006 0 2.035.748 2.58 1.499h-.01l-7.875 7.875c-1.166 1.166-3.075 1.166-4.241 0l-.753-.754 7.12-7.121c.014-.017.274-.27.274-.27.685-.653 1.591-1.23 2.905-1.23zm-7.13 0c1.006 0 2.034.748 2.58 1.499L6.435 12.81 3.56 9.934l3.558-3.56c.012-.014.265-.27.265-.27.685-.652 1.592-1.228 2.906-1.228zm-7.11 0c1.006 0 2.034.748 2.579 1.499l-2.88 2.88L0 6.375c.001-.012.273-.27.273-.27.686-.653 1.592-1.23 2.907-1.23z"
        fill={color}
      />
    </svg>
  );
};

WhopLogo20.category = 'Social & Brands';

export default WhopLogo20;

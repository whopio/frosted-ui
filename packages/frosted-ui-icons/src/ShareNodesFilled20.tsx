import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesFilled20"
      {...props}
    >
      <path
        d="M15.246 1.001c2.071 0 3.75 1.68 3.75 3.75 0 2.072-1.679 3.751-3.75 3.751-1.24 0-2.339-.603-3.021-1.53L8.339 8.914c.104.344.161.709.161 1.087 0 .376-.056.738-.16 1.08l3.887 1.942c.682-.925 1.78-1.525 3.02-1.525 2.07 0 3.75 1.679 3.75 3.75-.001 2.071-1.68 3.75-3.75 3.75-2.072 0-3.75-1.679-3.75-3.75 0-.297.034-.586.1-.863L7.63 12.4c-.688.825-1.722 1.35-2.88 1.35-2.071 0-3.75-1.68-3.75-3.75 0-2.071 1.679-3.75 3.75-3.75 1.155 0 2.187.523 2.875 1.344l3.97-1.986c-.064-.275-.099-.562-.099-.857 0-2.071 1.679-3.751 3.75-3.751z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesFilled20.category = 'Interface General';

export default ShareNodesFilled20;

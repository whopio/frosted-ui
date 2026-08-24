import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBoldFilled20"
      {...props}
    >
      <path
        d="M17.19 3.69c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L8.06 17.06c-.585.586-1.535.586-2.12 0L.69 11.81c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0L7 13.879l10.19-10.19z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBoldFilled20.category = 'Checkmarks';

export default CheckmarkBoldFilled20;

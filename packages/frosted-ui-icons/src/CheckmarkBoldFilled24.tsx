import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkBoldFilled24"
      {...props}
    >
      <path
        d="M21.188 3.94c.585-.585 1.534-.587 2.12-.002.587.585.588 1.536.003 2.122L9.246 20.15c-.281.281-.663.44-1.06.44-.399 0-.78-.158-1.062-.44L.689 13.716c-.585-.586-.585-1.535 0-2.121.586-.586 1.536-.586 2.121 0l5.373 5.373L21.188 3.941z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkBoldFilled24.category = 'Checkmarks';

export default CheckmarkBoldFilled24;

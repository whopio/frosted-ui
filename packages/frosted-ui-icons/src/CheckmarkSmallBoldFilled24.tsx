import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkSmallBoldFilled24"
      {...props}
    >
      <path
        d="M18.19 5.94c.585-.586 1.536-.586 2.121 0 .585.585.585 1.535 0 2.12l-10.5 10.5c-.282.282-.663.44-1.061.44-.398 0-.78-.158-1.06-.44l-4.25-4.25c-.586-.585-.586-1.535 0-2.12.585-.586 1.535-.586 2.12 0l3.19 3.189 9.44-9.44z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CheckmarkSmallBoldFilled24.category = 'Checkmarks';

export default CheckmarkSmallBoldFilled24;

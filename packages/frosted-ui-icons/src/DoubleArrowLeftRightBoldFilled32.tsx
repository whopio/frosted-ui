import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightBoldFilled32"
      {...props}
    >
      <path
        d="M25.06 17.437c-.586-.586-1.536-.586-2.121 0-.586.586-.586 1.535 0 2.121l2.94 2.94H2.5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5h23.38l-2.94 2.942c-.586.586-.586 1.535 0 2.121.585.585 1.535.586 2.12 0l5.502-5.502c.586-.586.586-1.535 0-2.121l-5.501-5.501zm-16-15.999c-.586-.586-1.536-.586-2.122 0l-5.5 5.5c-.585.586-.585 1.535 0 2.121l5.502 5.502c.586.585 1.536.586 2.122 0 .585-.586.585-1.535 0-2.121L6.12 9.499H29.5c.828 0 1.5-.672 1.5-1.5 0-.829-.672-1.5-1.5-1.5H6.12l2.94-2.94c.585-.586.585-1.535 0-2.121z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightBoldFilled32.category = 'Arrows';

export default DoubleArrowLeftRightBoldFilled32;

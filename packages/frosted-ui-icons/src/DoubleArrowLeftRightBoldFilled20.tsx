import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowLeftRightBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowLeftRightBoldFilled20"
      {...props}
    >
      <path
        d="M15.06 10.44c-.585-.586-1.535-.586-2.12 0-.586.585-.586 1.535 0 2.12l.939.94H2.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h11.379l-.94.94c-.585.585-.585 1.535 0 2.12.586.586 1.536.586 2.121 0l3.5-3.5c.282-.28.44-.662.44-1.06s-.158-.78-.44-1.06l-3.5-3.5zm-8-10c-.585-.586-1.535-.586-2.12 0l-3.502 3.5C1.158 4.22 1 4.602 1 5c0 .399.157.78.438 1.061l3.501 3.5c.586.586 1.536.586 2.122 0 .585-.585.585-1.535 0-2.12l-.94-.94H17.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5H6.12l.94-.94c.586-.586.586-1.536 0-2.122z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleArrowLeftRightBoldFilled20.category = 'Arrows';

export default DoubleArrowLeftRightBoldFilled20;

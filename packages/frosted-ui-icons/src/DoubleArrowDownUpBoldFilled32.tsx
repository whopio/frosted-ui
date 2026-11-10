import * as React from 'react';
import { IconProps } from './types';

export const DoubleArrowDownUpBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleArrowDownUpBoldFilled32"
      {...props}
    >
      <path
        d="M17.436 6.94c-.586.585-.586 1.535 0 2.12.585.586 1.535.586 2.12 0l2.941-2.941v23.38c0 .829.672 1.5 1.5 1.5.829 0 1.5-.67 1.5-1.5V6.12L28.44 9.06c.585.586 1.535.586 2.12 0 .586-.585.586-1.535 0-2.12l-5.501-5.503c-.586-.585-1.536-.585-2.122 0l-5.5 5.502zm-15.998 16c-.586.585-.586 1.535 0 2.12l5.5 5.5c.585.586 1.535.586 2.12 0l5.502-5.502c.586-.585.586-1.535 0-2.12-.585-.586-1.535-.586-2.12 0l-2.942 2.94V2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v23.379l-2.94-2.94c-.585-.585-1.535-.585-2.12 0z"
        fill={color}
      />
    </svg>
  );
};

DoubleArrowDownUpBoldFilled32.category = 'Arrows';

export default DoubleArrowDownUpBoldFilled32;

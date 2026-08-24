import * as React from 'react';
import { IconProps } from './types';

export const UploadBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadBoldFilled24"
      {...props}
    >
      <path
        d="M21.75 20.25c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5H2.25c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5h19.5zM11.054 1.086c.589-.48 1.457-.445 2.006.104l6.75 6.75c.586.586.586 1.535 0 2.12-.585.586-1.535.586-2.12 0L13.5 5.872v11.13c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V5.87l-4.19 4.19c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.535 0-2.121l6.75-6.75.114-.104z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBoldFilled24.category = 'Arrows';

export default UploadBoldFilled24;

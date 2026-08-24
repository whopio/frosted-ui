import * as React from 'react';
import { IconProps } from './types';

export const UploadBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadBoldFilled16"
      {...props}
    >
      <path
        d="M13.75 12.25c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5H2.25c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5h11.5zM8 .75c.398 0 .78.159 1.06.44l3.75 3.75c.586.586.586 1.535 0 2.12-.585.586-1.535.586-2.12 0L9.5 5.872v3.63c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V5.87l-1.19 1.19c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.535 0-2.121l3.75-3.75.109-.1C7.316.871 7.652.75 8 .75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBoldFilled16.category = 'Arrows';

export default UploadBoldFilled16;

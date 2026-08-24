import * as React from 'react';
import { IconProps } from './types';

export const UploadBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadBold32"
      {...props}
    >
      <path
        d="M30 29c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h28zM15.293 1.293c.39-.39 1.024-.39 1.414 0l10 10c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0L17 4.414V25c0 .552-.448 1-1 1s-1-.448-1-1V4.414l-8.293 8.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l10-10z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold32.category = 'Arrows';

export default UploadBold32;

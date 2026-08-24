import * as React from 'react';
import { IconProps } from './types';

export const UploadBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadBold24"
      {...props}
    >
      <path
        d="M22 21c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h20zM11.37 1.224c.392-.32.971-.297 1.337.069l7 7c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0L13 4.414V18c0 .552-.448 1-1 1s-1-.448-1-1V4.414L5.707 9.707c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l7-7 .076-.069z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold24.category = 'Arrows';

export default UploadBold24;

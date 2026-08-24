import * as React from 'react';
import { IconProps } from './types';

export const UploadBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UploadBold12"
      {...props}
    >
      <path
        d="M11 10c.552 0 1 .447 1 1 0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1 0-.553.448-1 1-1h10zM5.373.22c.39-.315.964-.292 1.329.068L9.88 3.426c.393.388.398 1.022.01 1.415-.388.392-1.02.396-1.414.008L7 3.391V8c0 .552-.448 1-1 1s-1-.448-1-1V3.39L3.523 4.85c-.393.388-1.026.384-1.414-.008-.387-.393-.383-1.027.01-1.415L5.298.288l.075-.067z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UploadBold12.category = 'Arrows';

export default UploadBold12;

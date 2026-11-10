import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneBoldFilled32"
      {...props}
    >
      <path
        d="M21.63 1.834C23.844 1.265 26 2.937 26 5.224V9.09c0 .086.063.156.148.17.509.082 1.204.25 1.912.593.71.345 1.455.88 2.021 1.705.571.833.919 1.902.919 3.239 0 1.336-.348 2.404-.919 3.237-.566.825-1.31 1.36-2.021 1.706-.708.343-1.403.511-1.912.594-.085.013-.148.082-.148.168v3.848c0 2.297-2.176 3.972-4.396 3.384l-8.227-2.182c-.19-.05-.377.094-.377.29V28.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V4.819l11.63-2.985zM7 23.864l-2.653-.703C2.374 22.638 1 20.852 1 18.81v-8.19c0-2.054 1.391-3.848 3.38-4.359L7 5.59v18.275z"
        fill={color}
      />
    </svg>
  );
};

MegaphoneBoldFilled32.category = 'Objects';

export default MegaphoneBoldFilled32;

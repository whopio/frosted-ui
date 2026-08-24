import * as React from 'react';
import { IconProps } from './types';

export const UpinTiltedFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UpinTiltedFilled12"
      {...props}
    >
      <path
        d="M.22.22c.293-.293.767-.293 1.06 0l10.5 10.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8.58 9.64c-.111-.11-.301-.057-.339.095-.33 1.32-1.974 1.776-2.935.814l-1.19-1.191c-.118-.117-.308-.117-.425 0l-1.379 1.38c-.292.292-.767.292-1.06 0-.293-.294-.293-.77 0-1.062L2.63 8.297c.117-.117.117-.307 0-.424l-1.19-1.19c-.962-.962-.508-2.606.812-2.936.153-.038.205-.228.094-.34L.22 1.28C-.073.987-.073.513.22.22zm6.158 1.148c.683-.683 1.792-.683 2.475 0l1.768 1.768c.683.683.683 1.79 0 2.474l-.713.713c-.117.117-.307.117-.424 0L5.665 2.504c-.117-.117-.117-.307 0-.424l.713-.712z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UpinTiltedFilled12.category = 'Interface General';

export default UpinTiltedFilled12;

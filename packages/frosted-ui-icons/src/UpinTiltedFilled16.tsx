import * as React from 'react';
import { IconProps } from './types';

export const UpinTiltedFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UpinTiltedFilled16"
      {...props}
    >
      <path
        d="M1.22 1.22c.293-.293.767-.293 1.06 0l12.5 12.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-2.178-2.177c-.137-.138-.372-.074-.422.114-.407 1.525-2.314 2.038-3.43.922l-1.907-1.906c-.117-.118-.307-.118-.424 0l-2.086 2.085c-.292.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06l2.086-2.086c.117-.117.117-.307 0-.424L2.393 8.342c-1.117-1.117-.605-3.024.92-3.43.189-.051.252-.287.114-.424L1.22 2.28c-.293-.293-.293-.767 0-1.06zm7.321.613c.8-.8 2.099-.8 2.9 0l2.757 2.758c.8.8.8 2.099 0 2.9l-1.562 1.56c-.117.117-.307.117-.424 0L6.98 3.819c-.118-.118-.118-.308 0-.425L8.54 1.833z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UpinTiltedFilled16.category = 'Interface General';

export default UpinTiltedFilled16;

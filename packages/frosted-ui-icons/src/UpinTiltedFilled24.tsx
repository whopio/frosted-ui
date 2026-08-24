import * as React from 'react';
import { IconProps } from './types';

export const UpinTiltedFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UpinTiltedFilled24"
      {...props}
    >
      <path
        d="M1.22 1.22c.293-.293.767-.293 1.06 0l20.5 20.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-4.932-4.932c-.158-.157-.427-.094-.497.118l-.56 1.682c-.693 2.08-3.334 2.703-4.884 1.153L7.74 17.696c-.117-.117-.307-.117-.424 0L3.994 21.02c-.293.293-.768.293-1.06 0-.293-.292-.293-.768 0-1.061l3.323-3.323c.117-.117.117-.307 0-.424l-3.105-3.105c-1.55-1.55-.927-4.19 1.154-4.884l1.681-.562c.211-.07.275-.339.117-.496L1.22 2.28c-.293-.293-.293-.767 0-1.06zM12.69 2.777c1.152-1.152 3.02-1.152 4.172 0l4.314 4.313c1.152 1.152 1.151 3.02 0 4.172l-3.165 3.165c-.117.117-.307.117-.424 0L9.527 6.365c-.118-.117-.118-.307 0-.424l3.164-3.164z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UpinTiltedFilled24.category = 'Interface General';

export default UpinTiltedFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const UpinTiltedFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UpinTiltedFilled20"
      {...props}
    >
      <path
        d="M1.22 1.22c.293-.293.767-.293 1.06 0l16.5 16.5c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-3.567-3.567c-.16-.16-.433-.092-.5.125l-.249.816c-.564 1.838-2.881 2.415-4.241 1.056l-2.444-2.444c-.117-.117-.307-.117-.424 0l-2.661 2.66c-.293.292-.768.292-1.06 0-.294-.293-.294-.768 0-1.06l2.66-2.66c.116-.118.116-.308 0-.425l-2.445-2.445c-1.36-1.36-.782-3.678 1.056-4.241l.815-.251c.216-.067.284-.34.124-.5L1.22 2.28c-.293-.293-.293-.767 0-1.06zm9.317 1.17c.996-.995 2.61-.995 3.605 0l3.466 3.466c.995.996.995 2.61 0 3.606l-2.28 2.28c-.118.118-.308.118-.425 0L8.256 5.097c-.117-.117-.117-.307 0-.424l2.281-2.281z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

UpinTiltedFilled20.category = 'Interface General';

export default UpinTiltedFilled20;

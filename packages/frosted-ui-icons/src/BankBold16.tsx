import * as React from 'react';
import { IconProps } from './types';

export const BankBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BankBold16"
      {...props}
    >
      <path
        d="M6.67 1.281c.846-.38 1.815-.38 2.661 0l4.487 2.014C14.537 3.617 15 4.332 15 5.12v1.047c0 .527-.307.98-.75 1.196v5.328c.448.254.75.734.75 1.285 0 .565-.458 1.023-1.023 1.023H2.023c-.564 0-1.022-.458-1.022-1.023 0-.55.302-1.03.749-1.284V7.363C1.307 7.147 1 6.693 1 6.167V5.12c0-.788.463-1.503 1.182-1.825L6.67 1.28zM3.75 7.5v5h1.5v-5h-1.5zm3.5 0v5h1.5v-5h-1.5zm3.5 0v5h1.5v-5h-1.5zM8.512 3.106c-.326-.146-.698-.146-1.024 0L3 5.12v.38h10v-.38L8.512 3.106z"
        fill={color}
      />
    </svg>
  );
};

BankBold16.category = 'Buildings';

export default BankBold16;

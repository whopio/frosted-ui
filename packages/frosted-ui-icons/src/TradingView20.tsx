import * as React from 'react';
import { IconProps } from './types';

export const TradingView20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.30986 14.0563H5.15493V9.09853H2V5.9436H8.30986V14.0563zM14.6197 14.0563H11.0141L14.3944 5.9436H18L14.6197 14.0563zM11.0141 9.54924C12.0098 9.54924 12.8169 8.74209 12.8169 7.74642 12.8169 6.75075 12.0098 5.9436 11.0141 5.9436 10.0184 5.9436 9.21127 6.75075 9.21127 7.74642 9.21127 8.74209 10.0184 9.54924 11.0141 9.54924z"
        fill={color}
      />
    </svg>
  );
};

export default TradingView20;

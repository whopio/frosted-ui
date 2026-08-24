import * as React from 'react';
import { IconProps } from './types';

export const PinTilted12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinTilted12"
      {...props}
    >
      <path
        d="M6.378 1.368c.683-.683 1.792-.683 2.476 0l1.767 1.768c.684.683.684 1.791 0 2.474l-1.71 1.71c-.057.058-.098.13-.118.21l-.552 2.205c-.33 1.32-1.973 1.776-2.935.814L3.903 9.146l-1.59 1.591c-.293.293-.768.293-1.06 0-.294-.293-.294-.768 0-1.061l1.59-1.591L1.44 6.683c-.962-.962-.507-2.606.812-2.936l2.206-.552c.08-.02.152-.06.21-.118l1.71-1.709zm1.415 1.06c-.098-.097-.256-.097-.353 0l-1.71 1.71c-.25.25-.564.427-.907.512l-2.206.552c-.188.047-.253.283-.116.42l3.865 3.865c.138.138.373.073.42-.115l.552-2.207c.086-.343.263-.655.513-.905l1.71-1.71c.097-.098.097-.256 0-.354L7.793 2.43z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinTilted12.category = 'Interface General';

export default PinTilted12;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRight20"
      {...props}
    >
      <path
        d="M15.481 1.354c1.921-.61 3.732 1.2 3.121 3.12L14.345 17.87c-.83 2.611-4.507 2.661-5.408.074L7.28 13.177c-.08-.233-.264-.416-.497-.497L2.01 11.019c-2.588-.9-2.537-4.578.074-5.408L15.48 1.354zm1.691 2.667c.242-.762-.475-1.48-1.237-1.237L2.539 7.04c-1.237.394-1.26 2.134-.035 2.561l4.771 1.66c.088.031.174.068.257.108l3.039-3.039c.293-.293.768-.293 1.06 0 .293.293.293.768 0 1.061l-3.04 3.04c.04.082.074.166.104.252l1.66 4.767c.426 1.225 2.167 1.202 2.56-.034L17.172 4.02z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpRight20.category = 'Communication';

export default PaperAirplaneUpRight20;

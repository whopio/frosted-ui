import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.4688 4.46988C10.7616 4.17704 11.2364 4.17716 11.5293 4.46988C11.822 4.76279 11.8221 5.2376 11.5293 5.53043L9.06055 8.00015L11.5293 10.4689C11.8221 10.7617 11.822 11.2375 11.5293 11.5304C11.2364 11.8229 10.7615 11.8231 10.4688 11.5304L8 9.0607L5.5293 11.5304C5.23647 11.8233 4.76166 11.8231 4.46875 11.5304C4.17603 11.2375 4.17591 10.7627 4.46875 10.4699L6.93848 8.00015L4.46875 5.53043C4.17586 5.23753 4.17586 4.7618 4.46875 4.4689C4.76158 4.17647 5.2365 4.17642 5.5293 4.4689L8 6.93961L10.4688 4.46988Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;

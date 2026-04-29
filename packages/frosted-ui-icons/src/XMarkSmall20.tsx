import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.4707 5.46988C13.7636 5.17733 14.2385 5.1771 14.5312 5.46988C14.8235 5.7627 14.8236 6.23769 14.5312 6.53043L11.0605 10.0002L14.5312 13.4699C14.8235 13.7627 14.8236 14.2377 14.5312 14.5304C14.2385 14.8232 13.7636 14.8229 13.4707 14.5304L10 11.0607L6.53027 14.5304C6.23744 14.8233 5.76263 14.8231 5.46973 14.5304C5.17693 14.2375 5.17687 13.7627 5.46973 13.4699L8.93945 10.0002L5.46973 6.53043C5.17691 6.23761 5.17707 5.76279 5.46973 5.46988C5.76263 5.17716 6.23744 5.17704 6.53027 5.46988L10 8.93961L13.4707 5.46988Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall20.category = 'Interface General';

export default XMarkSmall20;

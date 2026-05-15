import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.4697 6.46984C16.7626 6.17724 17.2374 6.17707 17.5302 6.46984C17.8229 6.76266 17.8228 7.23752 17.5302 7.53039L13.0605 12.0001L17.5302 16.4698C17.8228 16.7627 17.8229 17.2376 17.5302 17.5304C17.2374 17.823 16.7625 17.823 16.4697 17.5304L11.9999 13.0607L7.5302 17.5304C7.23736 17.8232 6.76256 17.8231 6.46966 17.5304C6.17679 17.2375 6.17677 16.7627 6.46966 16.4698L10.9394 12.0001L6.46966 7.53039C6.17681 7.23755 6.17692 6.76275 6.46966 6.46984C6.76256 6.17709 7.23736 6.177 7.5302 6.46984L11.9999 10.9396L16.4697 6.46984Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkSmall24.category = 'Interface General';

export default XMarkSmall24;

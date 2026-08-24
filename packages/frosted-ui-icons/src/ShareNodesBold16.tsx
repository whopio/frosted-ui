import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesBold16"
      {...props}
    >
      <path
        d="M12 1c1.657 0 3 1.343 3 3s-1.343 3-3 3c-.838 0-1.595-.345-2.14-.9L6.966 7.549C6.988 7.695 7 7.846 7 8c0 .152-.011.301-.033.447l2.896 1.449C10.407 9.343 11.163 9 12 9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3c0-.099.004-.197.014-.293L6.02 10.211C5.488 10.699 4.781 11 4 11c-1.657 0-3-1.343-3-3s1.343-3 3-3c.778 0 1.485.299 2.019.785l2.995-1.497C9.004 4.193 9 4.098 9 4c0-1.657 1.343-3 3-3zm0 10c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM4 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm8-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesBold16.category = 'Interface General';

export default ShareNodesBold16;

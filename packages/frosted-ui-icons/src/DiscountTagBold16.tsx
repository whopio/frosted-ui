import * as React from 'react';
import { IconProps } from './types';

export const DiscountTagBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DiscountTagBold16"
      {...props}
    >
      <path
        d="M12.002 1c1.657 0 3 1.342 3 3v3.246c0 1.061-.422 2.078-1.172 2.829l-3.756 3.754c-1.562 1.562-4.094 1.562-5.656 0l-2.247-2.247C.61 10.02.61 7.488 2.171 5.926L5.927 2.17C6.677 1.42 7.695 1 8.755 1h3.247zM8.755 3c-.53 0-1.04.21-1.414.585L3.585 7.34c-.78.781-.78 2.047 0 2.828l2.247 2.247c.781.781 2.047.78 2.828 0l3.756-3.755c.375-.375.586-.883.586-1.414V4c0-.552-.448-1-1-1H8.755zM8.25 4.5c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1zM5.75 7c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm5 0c.553 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

DiscountTagBold16.category = 'Money & Shopping';

export default DiscountTagBold16;

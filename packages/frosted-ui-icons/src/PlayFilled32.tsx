import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 4.76659C6.00017 1.73176 9.41724 -0.0457082 11.9023 1.69627L27.9268 12.9297C30.0561 14.4228 30.0561 17.5772 27.9268 19.0703L11.9023 30.3037C9.41724 32.0457 6.00017 30.2682 6 27.2334V4.76659Z"
        fill={color}
      />
    </svg>
  );
};

PlayFilled32.category = 'Sound & Music';

export default PlayFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const UserSettings12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="UserSettings12"
      {...props}
    >
      <path
        d="M5.443 6.77c.413-.03.773.28.805.692.031.413-.279.773-.691.804C3.247 8.442 2 9.926 2 11.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-2.313 2.075-4.261 4.943-4.48zM9.14 6.6c.23-.094.49-.094.72 0l.111.055 1.55.886c.296.169.479.484.479.825v1.768c0 .34-.183.656-.479.825l-1.55.886c-.292.166-.65.166-.943 0l-1.55-.886c-.296-.17-.478-.485-.478-.825V8.366c0-.34.182-.656.478-.825l1.55-.886.112-.055zM8.5 8.684v1.13l1 .572 1-.572v-1.13l-1-.57-1 .57zM6 0c1.657 0 3 1.343 3 3S7.657 6 6 6 3 4.657 3 3s1.343-3 3-3zm0 1.5c-.828 0-1.5.672-1.5 1.5S5.17 4.5 6 4.5c.828 0 1.5-.672 1.5-1.5S6.828 1.5 6 1.5z"
        fill={color}
      />
    </svg>
  );
};

UserSettings12.category = 'People';

export default UserSettings12;

import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HomeFilled12"
      {...props}
    >
      <path
        d="M3.95.77c1.18-1.012 2.92-1.012 4.1 0l2.99 2.562c.61.522.96 1.285.96 2.088v4.33C12 10.993 10.993 12 9.75 12H8.26c-.42 0-.76-.34-.76-.76V7.5C7.5 6.672 6.828 6 6 6s-1.5.672-1.5 1.5v3.74c0 .42-.34.76-.76.76H2.25C1.007 12 0 10.993 0 9.75V5.42c0-.803.35-1.566.96-2.088L3.95.769z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled12.category = 'Buildings';

export default HomeFilled12;

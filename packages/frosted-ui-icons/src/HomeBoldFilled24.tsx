import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 11.2261C2 10.1267 2.46352 9.07813 3.27669 8.33815L8.93766 3.18665C10.6736 1.60691 13.3264 1.60691 15.0623 3.18665L20.7233 8.33815C21.5365 9.07813 22 10.1267 22 11.2261V19.0713C22 20.6887 20.6888 21.9999 19.0714 21.9999H17C16.4477 21.9999 16 21.5522 16 20.9999V15.9999C16 13.7908 14.2091 11.9999 12 11.9999C9.79086 11.9999 8 13.7908 8 15.9999V20.9999C8 21.5522 7.55228 21.9999 7 21.9999H4.92857C3.31117 21.9999 2 20.6887 2 19.0713V11.2261Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

HomeBoldFilled24.category = 'Buildings';

export default HomeBoldFilled24;

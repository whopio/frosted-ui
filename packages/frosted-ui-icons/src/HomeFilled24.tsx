import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C12.7358 1 13.4498 1.25035 14.0244 1.70996L21.3105 7.53809C22.3782 8.39206 23 9.6856 23 11.0527V20.25C23 21.7688 21.7688 23 20.25 23H17.75C16.7835 23 16 22.2165 16 21.25V18C16 15.7909 14.2091 14 12 14C9.79087 14 8.00001 15.7909 8 18V21.25C8 22.2165 7.2165 23 6.25 23H3.75C2.23122 23 1 21.7688 1 20.25V11.0527C1 9.6856 1.62185 8.39206 2.68945 7.53809L9.97559 1.70996C10.5502 1.25035 11.2642 1 12 1Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled24.category = 'Buildings';

export default HomeFilled24;

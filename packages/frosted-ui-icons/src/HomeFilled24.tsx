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
        d="M1.75 11.2233C1.75 10.1255 2.21215 9.07833 3.02324 8.33846L8.94711 2.93473C10.6766 1.35707 13.3234 1.35707 15.0529 2.93474L20.9768 8.33846C21.7878 9.07833 22.25 10.1255 22.25 11.2233V19.3213C22.25 20.9387 20.9388 22.2499 19.3214 22.2499H16.75C16.1977 22.2499 15.75 21.8022 15.75 21.2499V15.9999C15.75 13.9288 14.0711 12.2499 12 12.2499C9.92893 12.2499 8.25 13.9288 8.25 15.9999V21.2499C8.25 21.8022 7.80228 22.2499 7.25 22.2499H4.67857C3.06117 22.2499 1.75 20.9387 1.75 19.3213V11.2233Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

HomeFilled24.category = 'Buildings';

export default HomeFilled24;

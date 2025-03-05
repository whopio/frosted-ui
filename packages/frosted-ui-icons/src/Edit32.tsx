import * as React from 'react';
import { IconProps } from './types';

export const Edit32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.25 19.75V24.68C28.25 26.6517 26.6517 28.25 24.68 28.25H7.32C5.34834 28.25 3.75 26.6517 3.75 24.68V7.32C3.75 5.34834 5.34834 3.75 7.32 3.75H12.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.7594 12.9906L27.0514 10.6985C27.8189 9.93107 28.25 8.87698 28.25 7.79169V7.79169C28.25 6.72322 27.8256 5.68548 27.07 4.92996V4.92996C26.3145 4.17444 25.2767 3.75 24.2083 3.75V3.75C23.123 3.75 22.0688 4.18115 21.3013 4.94859L19.0094 7.24057M24.7594 12.9906L17.5251 20.2248C16.8687 20.8812 15.9785 21.2499 15.0503 21.2499H11.75C11.1977 21.2499 10.75 20.8022 10.75 20.2499V16.9497C10.75 16.0214 11.1187 15.1312 11.7751 14.4748L19.0094 7.24057M24.7594 12.9906L19.0094 7.24057"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Edit32;

import * as React from 'react';
import { IconProps } from './types';

export const DashboardBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22 1C26.9706 1 31 5.02944 31 10V22C31 26.9706 26.9706 31 22 31H10C5.02944 31 1 26.9706 1 22V10C1 5.02944 5.02944 1 10 1H22ZM24.3184 11.6963C23.7367 11.1065 22.7861 11.1 22.1963 11.6816L17.3174 16.4932L14.8555 14.0645C14.028 13.2488 12.6984 13.2486 11.8711 14.0645L7.69629 18.1816C7.10649 18.7633 7.09995 19.7139 7.68164 20.3037C8.26335 20.8935 9.21389 20.9 9.80371 20.3184L13.3633 16.8066L15.8262 19.2354C16.6536 20.0512 17.9832 20.0513 18.8105 19.2354L24.3037 13.8184C24.8935 13.2367 24.9 12.2861 24.3184 11.6963Z"
        fill={color}
      />
    </svg>
  );
};

DashboardBoldFilled32.category = 'Stats & Charts';

export default DashboardBoldFilled32;

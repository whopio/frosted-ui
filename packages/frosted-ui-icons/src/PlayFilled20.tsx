import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M7.70324 1.97286C6.17845 0.986229 4.16663 2.08072 4.16663 3.89687V16.1031C4.16663 17.9192 6.17845 19.0137 7.70324 18.0271L17.1353 11.924C18.5309 11.0209 18.531 8.97898 17.1353 8.07595L7.70324 1.97286Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayFilled20;

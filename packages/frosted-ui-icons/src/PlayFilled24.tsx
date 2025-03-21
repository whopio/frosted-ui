import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M9.24394 2.36746C7.41419 1.1835 5 2.49689 5 4.67627V19.3237C5 21.5031 7.41419 22.8165 9.24394 21.6325L20.5624 14.3088C22.2371 13.2251 22.2372 10.7748 20.5624 9.69117L9.24394 2.36746Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayFilled24;

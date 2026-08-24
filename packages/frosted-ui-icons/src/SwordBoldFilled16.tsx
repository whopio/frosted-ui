import * as React from 'react';
import { IconProps } from './types';

export const SwordBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SwordBoldFilled16"
      {...props}
    >
      <path
        d="M13.513 8.513C14.446 7.857 15 6.789 15 5.648V2.9c0-1.049-.851-1.9-1.9-1.9h-2.74c-1.14 0-2.206.554-2.862 1.485L5.743 4.98c.352.191.678.433.966.721l1.13 1.131L9.88 4.79c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414L9.253 8.245l1.053 1.052h-.001c.287.287.527.613.718.964l2.49-1.748zm-11.894 5.87c.75.749 1.948.798 2.755.112l1.094-.93.284.285c.416.416.98.65 1.57.65 1.225 0 2.219-.994 2.219-2.22 0-.588-.234-1.153-.65-1.57L5.295 7.114c-.416-.416-.981-.651-1.57-.651-1.227 0-2.219.997-2.22 2.22 0 .589.235 1.155.651 1.572l.281.281-.927 1.089c-.689.807-.64 2.008.11 2.759z"
        fill={color}
      />
    </svg>
  );
};

SwordBoldFilled16.category = 'Objects';

export default SwordBoldFilled16;

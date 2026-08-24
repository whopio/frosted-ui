import * as React from 'react';
import { IconProps } from './types';

export const RotateCard12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateCard12"
      {...props}
    >
      <path
        d="M3 2.25C3 .774 4.402-.302 5.83.078l4.5 1.2C11.315 1.54 12 2.432 12 3.451v5.195c0 1.02-.685 1.911-1.67 2.174l-4.5 1.2C4.402 12.401 3 11.325 3 9.847v-.798c0-.414.336-.75.75-.75s.75.336.75.75v.798c0 .492.467.85.943.724l4.5-1.2c.329-.088.557-.385.557-.725V3.451c0-.34-.229-.637-.557-.724l-4.5-1.2c-.475-.127-.943.232-.943.724v1.083c0 .414-.336.75-.75.75S3 3.748 3 3.334V2.25zm2.97 1.518c.293-.292.767-.292 1.06 0l1.75 1.75c.293.293.293.768 0 1.061l-1.75 1.75c-.293.293-.767.293-1.06 0-.293-.293-.293-.768 0-1.06l.47-.47H2.5c-.385 0-.64.098-.781.21-.12.096-.219.247-.219.54 0 .414-.336.75-.75.75S0 7.963 0 7.549c0-.707.276-1.306.781-1.71.484-.387 1.105-.54 1.719-.54h3.94l-.47-.47c-.293-.293-.293-.768 0-1.06z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RotateCard12.category = 'Interface General';

export default RotateCard12;

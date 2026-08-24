import * as React from 'react';
import { IconProps } from './types';

export const VolumeOffFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeOffFilled16"
      {...props}
    >
      <path
        d="M6.55 1.462c1.14-1.02 2.95-.21 2.95 1.32v10.437c0 1.53-1.81 2.34-2.95 1.32l-2.623-2.347c-.138-.123-.316-.192-.5-.192H2.25C1.007 12 0 10.993 0 9.75v-3.5C0 5.008 1.007 4 2.25 4h1.177c.184 0 .362-.068.5-.191L6.55 1.462zm8.17 4.508c.293-.293.767-.293 1.06 0 .293.293.293.768 0 1.06l-.97.97.97.97c.293.293.293.768 0 1.06-.293.293-.767.293-1.06 0l-.97-.97-.97.97c-.293.293-.767.293-1.06 0-.293-.292-.293-.767 0-1.06l.97-.97-.97-.97c-.293-.292-.293-.767 0-1.06.293-.293.767-.293 1.06 0l.97.97.97-.97z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeOffFilled16.category = 'Sound & Music';

export default VolumeOffFilled16;

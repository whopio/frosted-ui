import * as React from 'react';
import { IconProps } from './types';

export const JourneyFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="JourneyFilled16"
      {...props}
    >
      <path
        d="M12.5 1.001c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5c-1.12 0-2.067-.736-2.386-1.751H4.001c-.829 0-1.501.672-1.501 1.501 0 .828.672 1.5 1.501 1.5h8.001c1.656 0 2.999 1.344 2.999 3s-1.343 2.999-2.999 2.999H5.885C5.566 14.264 4.619 15 3.5 15 2.12 15 1 13.88 1 12.5S2.12 10 3.5 10c1.12 0 2.066.736 2.385 1.75h6.117c.828 0 1.499-.671 1.499-1.499 0-.828-.671-1.5-1.499-1.5H4.001c-1.657 0-3-1.343-3.001-3C1 4.094 2.344 2.75 4.001 2.75h6.114c.32-1.014 1.266-1.749 2.385-1.749z"
        fill={color}
      />
    </svg>
  );
};

JourneyFilled16.category = 'Interface General';

export default JourneyFilled16;

import * as React from 'react';
import { IconProps } from './types';

export const DownloadBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.75 9.5C11.4404 9.5 12 10.0596 12 10.75C12 11.4404 11.4404 12 10.75 12H1.25C0.559645 12 1.03081e-06 11.4404 0 10.75C0 10.0596 0.559644 9.5 1.25 9.5H10.75ZM6 0C6.69036 0 7.25 0.559644 7.25 1.25V4.48242L8.36621 3.36621C8.85437 2.87806 9.64563 2.87806 10.1338 3.36621C10.6219 3.85437 10.6219 4.64563 10.1338 5.13379L6.88379 8.38379C6.42613 8.84145 5.70191 8.87021 5.21094 8.46973L5.11621 8.38379L1.86621 5.13379C1.37806 4.64563 1.37806 3.85437 1.86621 3.36621C2.35437 2.87806 3.14563 2.87806 3.63379 3.36621L4.75 4.48242V1.25C4.75 0.559644 5.30964 0 6 0Z"
        fill={color}
      />
    </svg>
  );
};

DownloadBoldFilled12.category = 'Arrows';

export default DownloadBoldFilled12;

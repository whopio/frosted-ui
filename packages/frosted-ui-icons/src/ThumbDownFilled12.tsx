import * as React from 'react';
import { IconProps } from './types';

export const ThumbDownFilled12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M2.98209 7.375H1.875C1.18466 7.375 0.625 6.81537 0.625 6.125V2.375C0.625 1.68463 1.18466 1.125 1.875 1.125H8.711C9.82295 1.125 10.7681 1.93725 10.9354 3.03651L11.3539 5.78652C11.5611 7.14832 10.507 8.375 9.12945 8.375H7.38404L7.5369 9.3554C7.70272 10.4189 6.87708 11.375 5.8055 11.375C5.33856 11.375 4.9085 11.1145 4.69367 10.6974L2.98209 7.375ZM2.625 2.625V5.875H2.125V2.625H2.625Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ThumbDownFilled12;

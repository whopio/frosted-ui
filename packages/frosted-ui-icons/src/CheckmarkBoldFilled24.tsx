import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.1885 3.94067C21.7735 3.35464 22.7222 3.35323 23.3086 3.93774C23.8948 4.52294 23.8966 5.47349 23.3115 6.05981L9.24609 20.1497C8.96491 20.4312 8.58346 20.5899 8.18555 20.5901C7.78756 20.5902 7.40544 20.4321 7.12402 20.1506L0.689453 13.7151C0.10371 13.1293 0.103681 12.1798 0.689453 11.594C1.27524 11.0084 2.22481 11.0083 2.81055 11.594L8.18359 16.967L21.1885 3.94067Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBoldFilled24.category = 'Checkmarks';

export default CheckmarkBoldFilled24;

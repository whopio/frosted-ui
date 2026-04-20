import * as React from 'react';
import { IconProps } from './types';

export const MailBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 7.75C12 9.54493 10.5449 11 8.75 11H3.25C1.45507 11 0 9.54493 0 7.75V4.60645L5.05566 7.00879C5.65297 7.29251 6.34703 7.29251 6.94434 7.00879L12 4.60645V7.75ZM8.75 1C9.94468 1 10.988 1.64508 11.5527 2.60547L6.08594 5.20215C6.03164 5.22794 5.96836 5.22794 5.91406 5.20215L0.446289 2.60547C1.01096 1.64485 2.05514 1 3.25 1H8.75Z"
        fill={color}
      />
    </svg>
  );
};

MailBoldFilled12.category = 'Communication';

export default MailBoldFilled12;

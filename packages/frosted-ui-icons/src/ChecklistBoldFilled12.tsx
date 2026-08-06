import * as React from 'react';
import { IconProps } from './types';

export const ChecklistBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChecklistBoldFilled12"
      {...props}
    >
      <path
        d="M7.49902 0C8.32594 0 9 0.670066 9 1.5V1.57422C9.97017 1.82395 10.6875 2.70181 10.6875 3.75V9.75C10.6875 10.9926 9.68014 12 8.4375 12H3.5625C2.31986 12 1.3125 10.9926 1.3125 9.75V3.75C1.3125 2.70181 2.02983 1.82395 3 1.57422V1.5C3 0.670067 3.67406 0 4.50098 0H7.49902ZM8.20703 5.29297C7.81651 4.90244 7.18349 4.90244 6.79297 5.29297L5.25 6.83594L5.20703 6.79297C4.81651 6.40244 4.18349 6.40244 3.79297 6.79297C3.40244 7.18349 3.40244 7.81651 3.79297 8.20703L4.54297 8.95703C4.93349 9.34756 5.56651 9.34756 5.95703 8.95703L8.20703 6.70703C8.59756 6.31651 8.59756 5.68349 8.20703 5.29297Z"
        fill={color}
      />
    </svg>
  );
};

ChecklistBoldFilled12.category = 'Interface General';

export default ChecklistBoldFilled12;

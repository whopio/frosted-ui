import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.89551 1.64038C6.75771 -0.105576 9.24719 -0.105581 10.1094 1.64038L15.2568 12.0642C16.3067 14.1916 14.137 16.4747 11.959 15.5339L8.75195 14.1482V9.25366C8.75195 8.83945 8.41617 8.50366 8.00195 8.50366C7.58785 8.50379 7.25195 8.83953 7.25195 9.25366V14.1482L4.0459 15.5339C1.86801 16.4744 -0.301607 14.1915 0.748047 12.0642L5.89551 1.64038Z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpFilled16.category = 'Communication';

export default PaperAirplaneUpFilled16;

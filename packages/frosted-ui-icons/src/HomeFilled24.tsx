import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C12.7358 1 13.4498 1.25035 14.0244 1.70996L21.9678 8.06348C22.6201 8.58526 22.9999 9.37562 23 10.2109V21.25C23 22.2165 22.2165 23 21.25 23H17.25C16.2835 23 15.5 22.2165 15.5 21.25V17.5C15.5 15.567 13.933 14 12 14C10.067 14 8.50001 15.567 8.5 17.5V21.25C8.5 22.2165 7.7165 23 6.75 23H2.75C1.84382 23 1.09829 22.3113 1.00879 21.4287L1 21.25V10.2109C1.00013 9.37562 1.37991 8.58526 2.03223 8.06348L9.97559 1.70996C10.5502 1.25035 11.2642 1 12 1Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled24.category = 'Buildings';

export default HomeFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.5 1.5C9.19036 1.5 9.75 2.05964 9.75 2.75C9.75 3.44036 9.19036 4 8.5 4H7.75C5.40279 4 3.5 5.90279 3.5 8.25V16.25C3.5 18.5972 5.40279 20.5 7.75 20.5H15.75C18.0972 20.5 20 18.5972 20 16.25V15.5C20 14.8096 20.5596 14.25 21.25 14.25C21.9404 14.25 22.5 14.8096 22.5 15.5V16.25C22.5 19.9779 19.4779 23 15.75 23H7.75C4.02208 23 1 19.9779 1 16.25V8.25C1 4.52208 4.02208 1.5 7.75 1.5H8.5ZM21.75 1C22.4404 1 23 1.55964 23 2.25V9.75C23 10.4404 22.4404 11 21.75 11C21.0596 11 20.5 10.4404 20.5 9.75V5.26758L12.8838 12.8838C12.3956 13.3719 11.6044 13.3719 11.1162 12.8838C10.6281 12.3956 10.6281 11.6044 11.1162 11.1162L18.7324 3.5H14.25C13.5596 3.5 13 2.94036 13 2.25C13 1.55964 13.5596 1 14.25 1H21.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled24.category = 'Arrows';

export default ArrowUpRightFromSquareFilled24;

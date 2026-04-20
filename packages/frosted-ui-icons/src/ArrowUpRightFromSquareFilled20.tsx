import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFromSquareFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.5 1.5C7.19036 1.5 7.75 2.05964 7.75 2.75C7.75 3.44036 7.19036 4 6.5 4H6.25C4.73122 4 3.5 5.23122 3.5 6.75V13.75C3.5 15.2688 4.73122 16.5 6.25 16.5H13.25C14.7688 16.5 16 15.2688 16 13.75V13.5C16 12.8096 16.5596 12.25 17.25 12.25C17.9404 12.25 18.5 12.8096 18.5 13.5V13.75C18.5 16.6495 16.1495 19 13.25 19H6.25C3.35051 19 1 16.6495 1 13.75V6.75C1 3.85051 3.3505 1.5 6.25 1.5H6.5ZM17.75 1C18.4404 1 19 1.55964 19 2.25V8C19 8.69036 18.4404 9.25 17.75 9.25C17.0596 9.25 16.5 8.69036 16.5 8V5.26758L10.8838 10.8838C10.3956 11.3719 9.60437 11.3719 9.11621 10.8838C8.62806 10.3956 8.62806 9.60437 9.11621 9.11621L14.7324 3.5H12C11.3096 3.5 10.75 2.94036 10.75 2.25C10.75 1.55964 11.3096 1 12 1H17.75Z"
        fill={color}
      />
    </svg>
  );
};

ArrowUpRightFromSquareFilled20.category = 'Arrows';

export default ArrowUpRightFromSquareFilled20;

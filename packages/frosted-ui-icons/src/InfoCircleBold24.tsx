import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12.25 9C12.8023 9 13.25 9.44771 13.25 10V16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16H11.25V11H9C8.44772 11 8 10.5523 8 10C8 9.44771 8.44772 9 9 9H12.25ZM12 5C12.6904 5 13.25 5.55964 13.25 6.25C13.25 6.94036 12.6904 7.5 12 7.5C11.3096 7.5 10.75 6.94036 10.75 6.25C10.75 5.55964 11.3096 5 12 5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold24.category = 'Product Icons';

export default InfoCircleBold24;

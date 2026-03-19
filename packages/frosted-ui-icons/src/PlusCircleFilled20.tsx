import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM9.95898 6C9.54477 6 9.20898 6.33579 9.20898 6.75V9.20898H6.75C6.3359 9.20898 6.00018 9.54492 6 9.95898C6 10.3732 6.33579 10.709 6.75 10.709H9.20898V13.25C9.20898 13.6642 9.54477 14 9.95898 14C10.3732 14 10.709 13.6642 10.709 13.25V10.709H13.25C13.6642 10.709 14 10.3732 14 9.95898C13.9998 9.54492 13.6641 9.20898 13.25 9.20898H10.709V6.75C10.709 6.33581 10.3732 6.00004 9.95898 6Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled20.category = 'Product Icons';

export default PlusCircleFilled20;

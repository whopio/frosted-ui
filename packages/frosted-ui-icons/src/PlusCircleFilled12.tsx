import * as React from 'react';
import { IconProps } from './types';

export const PlusCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 3.12891C5.58589 3.12903 5.25 3.46477 5.25 3.87891V5.25H3.87891C3.46478 5.25 3.12904 5.5859 3.12891 6C3.12891 6.41421 3.46469 6.75 3.87891 6.75H5.25V8.12109C5.25 8.53523 5.58589 8.87097 6 8.87109C6.4141 8.87096 6.75 8.53523 6.75 8.12109V6.75H8.12109C8.5352 6.74987 8.87109 6.41413 8.87109 6C8.87096 5.58598 8.53511 5.25013 8.12109 5.25H6.75V3.87891C6.75 3.46477 6.4141 3.12904 6 3.12891Z"
        fill={color}
      />
    </svg>
  );
};

PlusCircleFilled12.category = 'Interface General';

export default PlusCircleFilled12;

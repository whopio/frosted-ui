import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.6504 1C16.6048 1.00021 18.9998 3.39522 19 6.34961V13.6504C18.9998 16.6048 16.6048 18.9998 13.6504 19H6.34961C3.3952 18.9998 1.00021 16.6048 1 13.6504V6.34961C1.00024 3.39522 3.39522 1.00021 6.34961 1H13.6504ZM10 5.25C9.58579 5.25 9.25 5.58579 9.25 6V9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25003 10.4142 5.5858 10.75 6 10.75H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V6C10.75 5.58579 10.4142 5.25 10 5.25Z"
        fill={color}
      />
    </svg>
  );
};

PlusRectangleFilled20.category = 'Interface General';

export default PlusRectangleFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM7.75 7.75C7.33579 7.75 7 8.08579 7 8.5C7 8.91421 7.33579 9.25 7.75 9.25H9.49902V13.5H7.75C7.33579 13.5 7 13.8358 7 14.25C7 14.6642 7.33579 15 7.75 15H12.25C12.6642 15 13 14.6642 13 14.25C13 13.8358 12.6642 13.5 12.25 13.5H10.999V8.5C10.999 8.08579 10.6632 7.75 10.249 7.75H7.75ZM10 4.5C9.44771 4.5 9 4.94772 9 5.5C9 6.05228 9.44771 6.5 10 6.5C10.5523 6.5 11 6.05228 11 5.5C11 4.94772 10.5523 4.5 10 4.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

InfoCircleFilled20.category = 'Product Icons';

export default InfoCircleFilled20;

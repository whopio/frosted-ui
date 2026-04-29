import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.02832 2.15845C8.71905 0.641706 11.281 0.641707 12.9717 2.15845L17.707 6.40649C18.5299 7.14478 18.9999 8.19844 19 9.30396V15.8928C18.9999 17.6088 17.6086 19.0002 15.8926 19.0002H13.3496C12.6044 19 12.0003 18.3958 12 17.6506V13.0002C12 11.8957 11.1046 11.0002 10 11.0002C8.89543 11.0002 8 11.8957 8 13.0002V17.6506C7.99971 18.3958 7.39562 19 6.65039 19.0002H4.10742C2.39144 19.0002 1.00008 17.6088 1 15.8928V9.30396C1.00011 8.19844 1.4701 7.14478 2.29297 6.40649L7.02832 2.15845Z"
        fill={color}
      />
    </svg>
  );
};

HomeFilled20.category = 'Buildings';

export default HomeFilled20;

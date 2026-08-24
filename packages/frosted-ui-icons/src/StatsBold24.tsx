import * as React from 'react';
import { IconProps } from './types';

export const StatsBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="StatsBold24"
      {...props}
    >
      <path
        d="M2 1c.552 0 1 .448 1 1v18.246c0 .414.336.75.75.75h18.246c.552 0 1 .448 1 1s-.448 1-1 1H3.75c-1.519 0-2.75-1.231-2.75-2.75V2c0-.552.448-1 1-1zm19.996 4.999c.552 0 1 .448 1 1V11c0 .552-.448 1-1 1s-1-.448-1-1V9.414l-4.289 4.293c-.187.188-.442.293-.707.293-.265 0-.52-.105-.707-.293L12 10.414l-4.293 4.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l5-5 .076-.068c.393-.32.972-.298 1.338.068l3.292 3.292 3.584-3.586H18c-.552 0-1-.448-1-1s.448-1 1-1h3.996z"
        fill={color}
      />
    </svg>
  );
};

StatsBold24.category = 'Stats & Charts';

export default StatsBold24;

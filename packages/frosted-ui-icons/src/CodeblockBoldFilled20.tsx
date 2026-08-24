import * as React from 'react';
import { IconProps } from './types';

export const CodeblockBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeblockBoldFilled20"
      {...props}
    >
      <path
        d="M13.4 1C16.493 1 19 3.507 19 6.6v6.8c0 3.093-2.507 5.6-5.6 5.6H6.6C3.507 19 1 16.493 1 13.4V6.6C1 3.507 3.507 1 6.6 1h6.8zM8.957 6.293c-.39-.39-1.024-.39-1.414 0L4.896 8.939c-.585.586-.585 1.536 0 2.121l2.647 2.647c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L6.664 10l2.293-2.293c.39-.39.39-1.024 0-1.414zm3.5 0c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414L13.336 10l-2.293 2.293c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0l2.646-2.647c.586-.585.586-1.535 0-2.12l-2.646-2.647z"
        fill={color}
      />
    </svg>
  );
};

CodeblockBoldFilled20.category = 'Code';

export default CodeblockBoldFilled20;

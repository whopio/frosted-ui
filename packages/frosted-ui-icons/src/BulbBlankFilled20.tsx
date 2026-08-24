import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BulbBlankFilled20"
      {...props}
    >
      <path
        d="M13 17.496c.414 0 .75.336.75.75s-.336.75-.75.75H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6zM10 1c3.728 0 6.75 3.022 6.75 6.75 0 1.94-.82 3.69-2.13 4.919-.4.375-.62.806-.62 1.212V14c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-.12c0-.405-.22-.836-.62-1.211-1.31-1.23-2.13-2.979-2.13-4.919C3.25 4.022 6.272 1 10 1z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled20.category = 'Objects';

export default BulbBlankFilled20;

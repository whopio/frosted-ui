import * as React from 'react';
import { IconProps } from './types';

export const InfoFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoFilled24"
      {...props}
    >
      <path
        d="M12.25 10.031c.414 0 .75.336.75.75v8.688h1.857c.415 0 .75.336.75.75s-.335.75-.75.75H8.781c-.414 0-.75-.336-.75-.75 0-.415.336-.75.75-.75H11.5V11.53H8.781c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.469zM10.781 4c1.105 0 2 .895 2 2s-.895 2-2 2c-1.104 0-2-.895-2-2s.896-2 2-2z"
        fill={color}
      />
    </svg>
  );
};

InfoFilled24.category = 'Interface General';

export default InfoFilled24;

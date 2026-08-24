import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlusFilled16"
      {...props}
    >
      <path
        d="M11.75 0C14.097 0 16 1.903 16 4.25v6.896c-.232-.093-.485-.146-.75-.146H15v-.25c0-1.104-.896-2-2-2s-2 .896-2 2V11h-.25c-1.104 0-2 .896-2 2s.896 2 2 2H11v.25c0 .265.053.518.146.75H4.25C1.903 16 0 14.097 0 11.75v-7.5C0 1.903 1.903 0 4.25 0h7.5zM13 10c.414 0 .75.336.75.75v1.5h1.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.5v1.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5v-1.5c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlusFilled16.category = 'Interface General';

export default BlankNotePlusFilled16;

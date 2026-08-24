import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BlankNotePlusFilled24"
      {...props}
    >
      <path
        d="M16.25 0C20.53 0 24 3.47 24 7.75v9.5c0 .127-.005.252-.012.377-.231-.08-.479-.127-.738-.127H22v-1.25c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25v1.25h-1.25c-1.243 0-2.25 1.007-2.25 2.25S15.007 22 16.25 22h1.25v1.25c0 .259.046.507.127.738-.125.007-.25.012-.377.012h-9.5C3.47 24 0 20.53 0 16.25v-8.5C0 3.47 3.47 0 7.75 0h8.5zm3.5 15.5c.414 0 .75.336.75.75V19h2.75c.414 0 .75.336.75.75s-.336.75-.75.75H20.5v2.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V20.5h-2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H19v-2.75c0-.414.336-.75.75-.75zM22 22.045V22h.046l-.046.045z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlusFilled24.category = 'Interface General';

export default BlankNotePlusFilled24;

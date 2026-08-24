import * as React from 'react';
import { IconProps } from './types';

export const FaceIdBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FaceIdBoldFilled24"
      {...props}
    >
      <path
        d="M18.8 1C21.12 1 23 2.88 23 5.2v13.6c0 2.32-1.88 4.2-4.2 4.2H5.2C2.88 23 1 21.12 1 18.8V5.2C1 2.88 2.88 1 5.2 1h13.6zm-2.206 14.749c-.277-.478-.888-.64-1.367-.364-.942.545-2.158.865-3.226.865s-2.284-.32-3.227-.865c-.478-.277-1.09-.114-1.366.364s-.113 1.09.364 1.366c1.25.724 2.813 1.135 4.229 1.135s2.977-.412 4.228-1.135c.478-.276.641-.888.365-1.366zM12.25 7c-.552 0-1 .448-1 1v2.5c0 .804-.178 1.168-.299 1.315-.096.118-.226.185-.451.185-.552 0-1 .448-1 1s.448 1 1 1c.707 0 1.453-.252 1.998-.918.522-.637.752-1.522.752-2.582V8c0-.552-.448-1-1-1zM7 7c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V8c0-.552-.448-1-1-1zm10 0c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1V8c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

FaceIdBoldFilled24.category = 'Security';

export default FaceIdBoldFilled24;

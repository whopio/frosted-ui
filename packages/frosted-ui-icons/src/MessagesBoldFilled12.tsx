import * as React from 'react';
import { IconProps } from './types';

export const MessagesBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MessagesBoldFilled12"
      {...props}
    >
      <path
        d="M4.15 4.555c1.835.093 3.296 1.61 3.296 3.47l-.005.178c-.09 1.777-1.515 3.202-3.292 3.292l-.178.005c-.405 0-.792-.07-1.15-.197-.477.111-.936.237-1.119.289-.792.226-1.525-.507-1.299-1.299l.156-.575c.043-.169.09-.356.134-.547-.105-.298-.172-.616-.191-.947l-.006-.2c0-1.918 1.556-3.474 3.475-3.474l.178.005zM7.35.5c2.292 0 4.149 1.859 4.149 4.15 0 .51-.097.996-.264 1.443.137.593.294 1.177.373 1.457.235.829-.53 1.593-1.359 1.36-.28-.08-.863-.238-1.455-.374-.118.045-.24.084-.363.117.028-.205.045-.415.045-.628 0-2.485-2.015-4.5-4.5-4.5-.215 0-.427.015-.633.044C3.8 1.87 5.313.6 7.136.506L7.35.5z"
        fill={color}
      />
    </svg>
  );
};

MessagesBoldFilled12.category = 'Communication';

export default MessagesBoldFilled12;

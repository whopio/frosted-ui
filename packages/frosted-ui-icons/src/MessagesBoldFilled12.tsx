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
        d="M4.149 4.555c1.836.093 3.297 1.61 3.297 3.47l-.005.178c-.09 1.777-1.515 3.202-3.292 3.292l-.179.005c-.404 0-.791-.07-1.15-.197-.476.111-.935.237-1.118.289-.792.226-1.525-.507-1.3-1.299l.156-.575c.044-.169.09-.356.135-.547-.105-.298-.172-.616-.191-.947l-.006-.2c0-1.918 1.556-3.474 3.474-3.474l.179.005zM7.349.5C9.641.5 11.5 2.36 11.5 4.65c0 .51-.097.996-.264 1.443.136.593.294 1.177.373 1.457.234.829-.53 1.594-1.36 1.36-.28-.08-.862-.238-1.454-.374-.119.045-.24.084-.364.117.029-.205.045-.415.045-.628 0-2.486-2.015-4.5-4.5-4.5-.215 0-.426.015-.633.044C3.8 1.87 5.312.6 7.135.506L7.35.5z"
        fill={color}
      />
    </svg>
  );
};

MessagesBoldFilled12.category = 'Communication';

export default MessagesBoldFilled12;

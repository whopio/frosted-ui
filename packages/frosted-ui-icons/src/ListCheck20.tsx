import * as React from 'react';
import { IconProps } from './types';

export const ListCheck20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheck20"
      {...props}
    >
      <path
        d="M6.41 11.538c.254-.326.726-.384 1.052-.129.326.255.384.727.129 1.053l-3.125 4c-.129.165-.32.268-.529.285-.208.018-.414-.052-.568-.193l-1.875-1.715c-.306-.28-.327-.754-.048-1.06.28-.305.754-.326 1.06-.046L3.782 14.9l2.627-3.362zM18 13.25c.414 0 .75.336.75.75s-.336.75-.75.75h-7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7zM6.41 3.538c.254-.326.726-.384 1.052-.129.326.255.384.727.129 1.053l-3.125 4c-.129.165-.32.268-.529.285-.208.018-.414-.052-.568-.193L1.494 6.839c-.306-.28-.327-.754-.048-1.06.28-.305.754-.326 1.06-.046L3.782 6.9 6.41 3.538zM18 5.25c.414 0 .75.336.75.75s-.336.75-.75.75h-7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListCheck20.category = 'Text Formatting';

export default ListCheck20;

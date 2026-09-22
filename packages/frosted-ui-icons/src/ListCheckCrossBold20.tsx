import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCrossBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCrossBold20"
      {...props}
    >
      <path
        d="M6.043 11.043c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L5.914 14l1.543 1.543c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L4.5 15.414l-1.543 1.543c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L3.086 14l-1.543-1.543c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L4.5 12.586l1.543-1.543zM18 13c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1h7zM6.212 3.385c.34-.435.968-.513 1.403-.173.435.34.513.968.173 1.403l-3.125 4c-.171.22-.427.358-.705.381-.277.023-.552-.07-.758-.258L1.325 7.024C.918 6.65.89 6.019 1.262 5.612c.372-.408 1.005-.437 1.413-.064l1.077.984 2.46-3.147zM18 5c.552 0 1 .448 1 1s-.448 1-1 1h-7c-.552 0-1-.448-1-1s.448-1 1-1h7z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCrossBold20.category = 'Text Formatting';

export default ListCheckCrossBold20;

import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCrossBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCrossBold32"
      {...props}
    >
      <path
        d="M9.293 18.793c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L7.914 23l2.793 2.793c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L6.5 24.414l-2.793 2.793c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L5.086 23l-2.793-2.793c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0L6.5 21.586l2.793-2.793zM30 22c.552 0 1 .448 1 1s-.448 1-1 1H16c-.552 0-1-.448-1-1s.448-1 1-1h14zM9.963 4.385c.34-.435.968-.513 1.403-.173.435.34.513.968.173 1.403l-5.47 7.001c-.171.22-.426.358-.704.381-.277.023-.553-.07-.759-.259l-3.28-3c-.408-.372-.437-1.005-.064-1.413.372-.407 1.005-.435 1.413-.062l2.483 2.27 4.805-6.148zM30 8c.552 0 1 .448 1 1s-.448 1-1 1H16c-.552 0-1-.448-1-1s.448-1 1-1h14z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCrossBold32.category = 'Text Formatting';

export default ListCheckCrossBold32;

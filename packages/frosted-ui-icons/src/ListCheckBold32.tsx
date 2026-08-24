import * as React from 'react';
import { IconProps } from './types';

export const ListCheckBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckBold32"
      {...props}
    >
      <path
        d="M9.963 18.386c.34-.435.968-.513 1.403-.173.435.34.513.968.173 1.403l-5.47 7.001c-.171.22-.426.358-.704.381-.277.023-.553-.07-.758-.259l-3.282-3c-.407-.372-.436-1.005-.063-1.413.372-.407 1.005-.435 1.413-.062l2.483 2.27 4.805-6.148zM30 22c.552 0 1 .448 1 1s-.448 1-1 1H16c-.552 0-1-.448-1-1s.448-1 1-1h14zM9.963 4.385c.34-.435.968-.513 1.403-.173.435.34.513.968.173 1.403l-5.47 7.001c-.171.22-.426.358-.704.381-.277.023-.553-.07-.758-.259l-3.282-3C.918 9.366.89 8.733 1.262 8.325c.372-.407 1.005-.435 1.413-.062l2.483 2.27 4.805-6.148zM30 8c.552 0 1 .448 1 1s-.448 1-1 1H16c-.552 0-1-.448-1-1s.448-1 1-1h14z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ListCheckBold32.category = 'Text Formatting';

export default ListCheckBold32;

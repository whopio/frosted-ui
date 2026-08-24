import * as React from 'react';
import { IconProps } from './types';

export const FolderAdd12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FolderAdd12"
      {...props}
    >
      <path
        d="M4.235.5c.43 0 .836.185 1.117.502l.112.144.93 1.354h4.016c.878 0 1.59.712 1.59 1.59v1.66c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4.09c0-.05-.04-.09-.09-.09H6.39c-.491 0-.95-.241-1.229-.646L4.231 2H1.59c-.05 0-.09.04-.09.09v7.82c0 .05.04.09.09.09h3.66c.414 0 .75.336.75.75s-.336.75-.75.75H1.59C.712 11.5 0 10.788 0 9.91V2.09C0 1.212.712.5 1.59.5h2.645zM8.75 6c.414 0 .75.336.75.75V8h1.25c.414 0 .75.336.75.75s-.336.75-.75.75H9.5v1.25c0 .414-.336.75-.75.75S8 11.164 8 10.75V9.5H6.75c-.414 0-.75-.336-.75-.75S6.336 8 6.75 8H8V6.75c0-.414.336-.75.75-.75z"
        fill={color}
      />
    </svg>
  );
};

FolderAdd12.category = 'Interface General';

export default FolderAdd12;

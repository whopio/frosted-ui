import * as React from 'react';
import { IconProps } from './types';

export const ListCheckBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckBold16"
      {...props}
    >
      <path
        d="M5.187 9.42c.32-.45.945-.554 1.394-.233.45.321.553.945.232 1.395l-2.5 3.5c-.17.238-.438.391-.731.415-.293.024-.581-.082-.789-.29l-1.5-1.5c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l.665.665L5.187 9.42zM14 10.5c.552 0 1 .448 1 1 0 .553-.448 1-1 1H9c-.552 0-1-.447-1-1 0-.552.448-1 1-1h5zM5.187 2.42c.32-.45.945-.554 1.394-.233.45.321.553.945.232 1.394l-2.5 3.5c-.17.24-.438.392-.731.416-.293.025-.581-.082-.789-.29l-1.5-1.5c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l.665.665L5.187 2.42zM14 3.5c.552 0 1 .448 1 1s-.448 1-1 1H9c-.552 0-1-.448-1-1s.448-1 1-1h5z"
        fill={color}
      />
    </svg>
  );
};

ListCheckBold16.category = 'Text Formatting';

export default ListCheckBold16;

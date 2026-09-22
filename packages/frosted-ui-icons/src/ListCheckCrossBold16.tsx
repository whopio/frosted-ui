import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCrossBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCrossBold16"
      {...props}
    >
      <path
        d="M5.043 9.043c.39-.39 1.023-.39 1.414 0 .39.39.39 1.023 0 1.414L5.414 11.5l1.043 1.043c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0L4 12.914l-1.043 1.043c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414L2.586 11.5l-1.043-1.043c-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0L4 10.086l1.043-1.043zM14 10.5c.552 0 1 .448 1 1s-.448 1-1 1H9c-.552 0-1-.448-1-1s.448-1 1-1h5zM5.186 1.919c.321-.45.945-.554 1.395-.233.449.321.553.946.232 1.395l-2.5 3.5c-.17.239-.438.392-.731.416-.293.024-.581-.083-.79-.29l-1.5-1.5c-.39-.39-.39-1.024 0-1.414.391-.39 1.024-.39 1.415 0l.665.665 1.814-2.54zM14 3.499c.552 0 1 .449 1 1 0 .553-.448 1-1 1H9c-.552 0-1-.447-1-1 0-.551.448-1 1-1h5z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCrossBold16.category = 'Text Formatting';

export default ListCheckCrossBold16;

import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCrossBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCrossBold12"
      {...props}
    >
      <path
        d="M2.293 7.293c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414L3.414 9l.293.293c.39.39.39 1.024 0 1.414-.39.39-1.024.39-1.414 0L2 10.414l-.293.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414L.586 9l-.293-.293c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0L2 7.586l.293-.293zM11.002 8c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5zM2.687 1.17c.32-.45.945-.554 1.394-.233.45.32.553.945.232 1.394L2.751 4.52c-.17.239-.439.392-.731.416-.293.024-.582-.082-.79-.29l-.937-.938c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l.103.103.877-1.227zm8.315.83c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.448-1-1s.448-1 1-1h5z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCrossBold12.category = 'Text Formatting';

export default ListCheckCrossBold12;

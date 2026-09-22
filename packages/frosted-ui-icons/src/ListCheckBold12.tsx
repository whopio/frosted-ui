import * as React from 'react';
import { IconProps } from './types';

export const ListCheckBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckBold12"
      {...props}
    >
      <path
        d="M2.687 7.17c.32-.45.945-.554 1.394-.233.45.321.553.945.232 1.395l-1.562 2.187c-.17.239-.439.392-.731.416-.293.024-.582-.082-.79-.29l-.937-.938c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l.103.103.877-1.227zm8.315.83c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.447-1-1 0-.552.448-1 1-1h5zM2.687 1.17c.32-.45.945-.554 1.394-.233.45.321.553.945.232 1.395L2.751 4.519c-.17.239-.439.392-.731.416-.293.024-.582-.082-.79-.29l-.937-.938c-.39-.39-.39-1.023 0-1.414.39-.39 1.024-.39 1.414 0l.103.103.877-1.227zm8.315.83c.552 0 1 .448 1 1s-.448 1-1 1h-5c-.552 0-1-.447-1-1 0-.552.448-1 1-1h5z"
        fill={color}
      />
    </svg>
  );
};

ListCheckBold12.category = 'Text Formatting';

export default ListCheckBold12;

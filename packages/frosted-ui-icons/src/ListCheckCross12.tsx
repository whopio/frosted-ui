import * as React from 'react';
import { IconProps } from './types';

export const ListCheckCross12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ListCheckCross12"
      {...props}
    >
      <path
        d="M2.47 7.47c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06L3.06 9l.47.47c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L2 10.06l-.47.47c-.293.293-.767.293-1.06 0-.293-.293-.293-.767 0-1.06L.94 9l-.47-.47c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l.47.47.47-.47zm8.532.78c.414 0 .75.336.75.75s-.336.75-.75.75h-5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5zM2.89 1.314C3.13.978 3.599.9 3.936 1.14c.336.24.415.708.174 1.046L2.548 4.373c-.128.18-.33.293-.549.312-.22.018-.436-.061-.592-.217L.47 3.53c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l.312.311L2.89 1.314zm8.112.936c.414 0 .75.336.75.75s-.336.75-.75.75h-5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5z"
        fill={color}
      />
    </svg>
  );
};

ListCheckCross12.category = 'Text Formatting';

export default ListCheckCross12;

import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkReceipt20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CheckmarkReceipt20"
      {...props}
    >
      <path
        d="M15.001 0c1.657 0 3 1.343 3 3v15.633c0 .981-1.046 1.61-1.912 1.147l-2.679-1.43-2.723 1.462c-.43.23-.945.231-1.374 0l-2.715-1.461-2.687 1.43C3.045 20.242 2 19.615 2 18.634V3c0-1.657 1.343-3 3-3h10.001zM5 1.5c-.828 0-1.5.672-1.5 1.5v15.3l2.51-1.336.142-.065c.289-.11.609-.11.897.002l.141.066 2.811 1.512 2.82-1.513.14-.066c.288-.11.609-.111.897 0l.142.065 2.501 1.334V3c0-.828-.672-1.5-1.5-1.5H5zm7.72 4.72c.293-.293.767-.293 1.06 0 .293.293.293.767 0 1.06l-4.5 4.5c-.293.293-.767.293-1.06 0l-2-2c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l1.47 1.47 3.97-3.97z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkReceipt20.category = 'Money & Shopping';

export default CheckmarkReceipt20;

import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M23.4276 11.062L1.4628 0.107194C0.665704 -0.289104 -0.214487 0.47833 0.0471082 1.34641L3.0693 10.0398C3.19241 10.4455 3.54325 10.7349 3.95873 10.7695L14.2871 12.0024L3.95873 13.2353C3.54325 13.2699 3.19241 13.5593 3.0693 13.965L0.0471082 22.6553C-0.214487 23.5234 0.662626 24.2908 1.4628 23.8914L23.4306 12.9366C23.8338 12.7353 24 12.449 24 11.9993C24 11.5495 23.8369 11.2633 23.4306 11.062H23.4276Z"
        fill={color}
      />
    </svg>
  );
};

export default PaperAirplaneFilled24;

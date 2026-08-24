import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DoubleChevronUp32"
      {...props}
    >
      <path
        d="M29.72 19.69c.293.292.768.292 1.06 0 .293-.294.293-.768 0-1.061L17.12 4.963c-.617-.618-1.619-.617-2.236 0L1.222 18.629c-.293.293-.293.767 0 1.06.293.293.768.293 1.06 0L15.946 6.023c.031-.03.082-.031.113 0L29.72 19.69zm0 7.588c.293.293.768.293 1.06 0 .293-.293.293-.767 0-1.06L17.12 12.552c-.618-.618-1.619-.617-2.236 0L1.222 26.218c-.293.293-.293.767 0 1.06.293.293.768.293 1.06 0l13.663-13.666c.031-.03.082-.031.113 0L29.72 27.278z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUp32.category = 'Arrows';

export default DoubleChevronUp32;

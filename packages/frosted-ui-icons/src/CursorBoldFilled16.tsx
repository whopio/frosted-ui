import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.0002 12.7627C15.0001 13.9982 13.9985 14.9999 12.7629 15C12.1696 15 11.6005 14.7642 11.1809 14.3447L8.83125 11.996L8.0793 13.7255C7.30725 15.5008 4.7481 15.3748 4.1545 13.5322L1.10567 4.06246C0.518819 2.24014 2.24038 0.518574 4.0627 1.10542L13.5324 4.15425C15.375 4.74786 15.5011 7.30701 13.7258 8.07906L11.9963 8.83101L14.3449 11.1806C14.7644 11.6002 15.0002 12.1693 15.0002 12.7627Z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled16.category = 'Arrows';

export default CursorBoldFilled16;

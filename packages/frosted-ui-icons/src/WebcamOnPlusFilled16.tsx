import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 2.5C9.87792 2.5 11.2628 3.53759 11.7812 4.9873L12.4043 4.41895C13.3991 3.51101 14.9988 4.21656 14.999 5.56348V10.4365C14.9988 11.7834 13.3991 12.489 12.4043 11.5811L11.7812 11.0117C11.2631 12.4619 9.87825 13.5 8.25 13.5H4.75C2.67893 13.5 1 11.8211 1 9.75V6.25C1 4.17893 2.67893 2.5 4.75 2.5H8.25ZM6.5 5C6.08579 5 5.75 5.33579 5.75 5.75V7.25H4.25C3.83579 7.25 3.5 7.58579 3.5 8C3.5 8.41421 3.83579 8.75 4.25 8.75H5.75V10.25C5.75 10.6642 6.08579 11 6.5 11C6.91421 11 7.25 10.6642 7.25 10.25V8.75H8.75C9.16421 8.75 9.5 8.41421 9.5 8C9.5 7.58579 9.16421 7.25 8.75 7.25H7.25V5.75C7.25 5.33579 6.91421 5 6.5 5Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusFilled16.category = 'Interface General';

export default WebcamOnPlusFilled16;

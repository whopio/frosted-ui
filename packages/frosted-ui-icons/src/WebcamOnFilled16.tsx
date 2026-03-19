import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.25 2.5C9.87792 2.5 11.2628 3.53759 11.7812 4.9873L12.4043 4.41895C13.3991 3.51101 14.9988 4.21656 14.999 5.56348V10.4365C14.9988 11.7834 13.3991 12.489 12.4043 11.5811L11.7812 11.0117C11.2631 12.4619 9.87825 13.5 8.25 13.5H4.75C2.67893 13.5 1 11.8211 1 9.75V6.25C1 4.17893 2.67893 2.5 4.75 2.5H8.25Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnFilled16.category = 'Product Icons';

export default WebcamOnFilled16;

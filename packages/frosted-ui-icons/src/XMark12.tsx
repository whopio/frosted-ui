import * as React from 'react';
import { IconProps } from './types';

export const XMark12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.93925 5.99988L2.46442 8.47471C2.17153 8.7676 2.17153 9.24247 2.46442 9.53537C2.75732 9.82826 3.23219 9.82826 3.52508 9.53537L5.99991 7.06054L8.47483 9.53546C8.76772 9.82835 9.2426 9.82835 9.53549 9.53546C9.82838 9.24256 9.82838 8.76769 9.53549 8.4748L7.06057 5.99988L9.53549 3.52496C9.82838 3.23207 9.82838 2.75719 9.53549 2.4643C9.2426 2.17141 8.76772 2.17141 8.47483 2.4643L5.99991 4.93922L3.52508 2.46439C3.23219 2.1715 2.75731 2.1715 2.46442 2.46439C2.17153 2.75728 2.17153 3.23216 2.46442 3.52505L4.93925 5.99988Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default XMark12;

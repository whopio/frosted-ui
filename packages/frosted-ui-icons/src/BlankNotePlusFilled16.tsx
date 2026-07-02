import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.75 0C14.097 0.000131941 15.9999 1.90298 16 4.25V11.1465C15.7683 11.0526 15.5154 11 15.25 11H15V10.75C14.9999 9.64562 14.1044 8.75013 13 8.75C11.8955 8.75 11.0001 9.64554 11 10.75V11H10.75C9.64551 11 8.75013 11.8955 8.75 13C8.75016 14.1044 9.64553 15 10.75 15H11V15.25C11 15.5153 11.0526 15.7683 11.1465 16H4.25C1.90287 16 0.000131946 14.0971 0 11.75V4.25C0.000132067 1.9029 1.90287 0 4.25 0H11.75ZM13 10C13.4142 10 13.75 10.3358 13.75 10.75V12.25H15.25C15.6642 12.25 16 12.5858 16 13C16 13.4142 15.6642 13.75 15.25 13.75H13.75V15.25C13.75 15.6642 13.4142 16 13 16C12.5858 16 12.25 15.6642 12.25 15.25V13.75H10.75C10.3358 13.75 10 13.4142 10 13C10 12.5858 10.3358 12.25 10.75 12.25H12.25V10.75C12.25 10.3358 12.5858 10 13 10Z"
        fill={color}
      />
    </svg>
  );
};

BlankNotePlusFilled16.category = 'Interface General';

export default BlankNotePlusFilled16;

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
        d="M11.7498 0.000244137C14.0969 0.00037608 15.9998 1.90309 15.9998 4.25018V11.1466C15.768 11.0527 15.5152 11.0001 15.2498 11.0001H14.9998V10.7501C14.9998 9.64561 14.1042 8.75024 12.9998 8.75011C11.8952 8.75011 10.9998 9.64553 10.9998 10.7501V11.0001H10.7498C9.64528 11.0001 8.74987 11.8955 8.74987 13C8.75002 14.1045 9.64538 15 10.7498 15H10.9998V15.25C10.9999 15.5154 11.0524 15.7683 11.1463 16H4.24994C1.90284 16 0.000131944 14.0971 0 11.7501V4.25018C1.28851e-07 1.90301 1.90276 0.000244137 4.24994 0.000244137H11.7498Z"
        fill={color}
      />
      <path
        d="M12.9998 10.7498V12.9998M12.9998 15.2498V12.9998M12.9998 12.9998H10.7498M12.9998 12.9998H15.2498"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BlankNotePlusFilled16.category = 'Interface General';

export default BlankNotePlusFilled16;

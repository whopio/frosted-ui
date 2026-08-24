import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellBoldFilled24"
      {...props}
    >
      <path
        d="M15.502 1c.553 0 1 .448 1 1s-.447 1-1 1H13v1.03c4.164.24 6.709 1.996 8.172 4.494 1.515 2.586 1.779 5.82 1.822 8.46.02 1.122-.893 2.016-1.992 2.016H13v2h8.002c.553 0 1 .448 1 1s-.447 1-1 1h-18c-.552 0-1-.448-1-1s.448-1 1-1H11v-2H3.002c-1.099 0-2.01-.894-1.992-2.017.044-2.64.306-5.872 1.82-8.458C4.291 6.027 6.835 4.27 11 4.03V3H8.502c-.552 0-1-.448-1-1s.448-1 1-1h7z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBoldFilled24.category = 'Objects';

export default ReceptionBellBoldFilled24;

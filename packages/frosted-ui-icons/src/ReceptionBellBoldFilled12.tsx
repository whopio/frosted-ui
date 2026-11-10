import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellBoldFilled12"
      {...props}
    >
      <path
        d="M7.545 0c.552 0 1 .448 1 1s-.448 1-1 1h-.546v.542c1.873.159 3.151.778 3.955 1.765.905 1.11 1.022 2.473 1.043 3.42.02.857-.677 1.523-1.495 1.523H6.999V10H10c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h2.999v-.75H1.5c-.818 0-1.514-.666-1.495-1.521l.014-.375c.048-.91.235-2.074 1.026-3.046.803-.988 2.08-1.607 3.954-1.766V2h-.547c-.552 0-1-.448-1-1s.448-1 1-1h3.093z"
        fill={color}
      />
    </svg>
  );
};

ReceptionBellBoldFilled12.category = 'Objects';

export default ReceptionBellBoldFilled12;

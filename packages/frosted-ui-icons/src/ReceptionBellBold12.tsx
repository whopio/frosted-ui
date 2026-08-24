import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBellBold12"
      {...props}
    >
      <path
        d="M7.544 0c.553 0 1 .448 1 1s-.447 1-1 1h-.546v.542c1.874.159 3.152.778 3.955 1.765.905 1.11 1.022 2.473 1.043 3.42.02.857-.677 1.523-1.495 1.523H6.998V10H10c.553 0 1 .448 1 1s-.447 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h3v-.75h-3.5c-.817 0-1.514-.666-1.495-1.521l.014-.375c.049-.91.236-2.074 1.026-3.046.804-.988 2.08-1.607 3.954-1.766V2h-.546c-.553 0-1-.448-1-1s.447-1 1-1h3.092zM5.998 4.5c-2.093 0-2.984.556-3.402 1.07-.36.443-.509 1.018-.564 1.68h7.937c-.056-.662-.205-1.236-.566-1.68-.419-.514-1.311-1.07-3.405-1.07z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBold12.category = 'Objects';

export default ReceptionBellBold12;

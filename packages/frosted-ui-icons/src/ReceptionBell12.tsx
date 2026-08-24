import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBell12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ReceptionBell12"
      {...props}
    >
      <path
        d="M8.173 0c.449 0 .813.364.813.812 0 .449-.364.813-.813.813h-.862v.848c2.215.18 3.644 1.101 4.513 2.36.93 1.349 1.13 2.961 1.173 4.076.03.782-.609 1.383-1.345 1.383h-4.34v1.081h3.791c.449 0 .813.364.813.813 0 .448-.364.812-.813.812H1.897c-.449 0-.813-.364-.813-.813 0-.448.364-.812.813-.812h3.79v-1.08H1.343C.61 10.291-.028 9.69.001 8.908c.042-1.114.242-2.727 1.172-4.076.869-1.259 2.299-2.18 4.514-2.36v-.848h-.864c-.448 0-.812-.364-.812-.813 0-.448.364-.812.812-.812h3.35zM6.5 4.064c-2.233 0-3.366.788-3.989 1.691-.599.868-.806 1.957-.87 2.912h9.716c-.063-.955-.27-2.044-.87-2.912-.622-.903-1.755-1.691-3.987-1.691z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBell12.category = 'Objects';

export default ReceptionBell12;

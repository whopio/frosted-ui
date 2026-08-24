import * as React from 'react';
import { IconProps } from './types';

export const QrCodeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="QrCodeFilled24"
      {...props}
    >
      <path
        d="M7.75 13.25c1.657 0 3 1.343 3 3V20c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3v-3.75c0-1.657 1.343-3 3-3h3.75zM15 20c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm-3.5-3.38c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zM15 13.25c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm7 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zM7.75 1c1.657 0 3 1.343 3 3v3.75c0 1.657-1.343 3-3 3H4c-1.657 0-3-1.343-3-3V4c0-1.657 1.343-3 3-3h3.75zM20 1c1.657 0 3 1.343 3 3v3.75c0 1.657-1.343 3-3 3h-3.75c-1.657 0-3-1.343-3-3V4c0-1.657 1.343-3 3-3H20z"
        fill={color}
      />
    </svg>
  );
};

QrCodeFilled24.category = 'Communication';

export default QrCodeFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const TripleGridFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TripleGridFilled16"
      {...props}
    >
      <path
        d="M3.5 11.5c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm-10-5c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm-10-5c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1zm5 0c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h1z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TripleGridFilled16.category = 'Interface General';

export default TripleGridFilled16;

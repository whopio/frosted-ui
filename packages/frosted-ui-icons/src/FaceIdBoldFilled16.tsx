import * as React from 'react';
import { IconProps } from './types';

export const FaceIdBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FaceIdBoldFilled16"
      {...props}
    >
      <path
        d="M12.1 1C13.7 1 15 2.299 15 3.9v8.2c0 1.601-1.299 2.9-2.9 2.9H3.9C2.3 15 1 13.701 1 12.1V3.9C1 2.3 2.299 1 3.9 1h8.2zm-.962 9.151c-.277-.478-.889-.64-1.367-.364-.506.293-1.178.463-1.772.463-.594 0-1.265-.17-1.771-.463-.478-.276-1.09-.113-1.367.364-.276.478-.113 1.09.365 1.367.83.48 1.852.732 2.773.732s1.943-.252 2.774-.732c.478-.277.641-.889.365-1.367zM8.25 5c-.552 0-1 .448-1 1v.75c0 .203-.016.35-.037.451-.004.02-.01.036-.015.051-.528.027-.948.463-.948.998 0 .552.448 1 1 1 .628 0 1.221-.25 1.599-.83.322-.494.401-1.106.401-1.67V6c0-.552-.448-1-1-1zM5 5c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1s1-.448 1-1V6c0-.552-.448-1-1-1zm6 0c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1s1-.448 1-1V6c0-.552-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

FaceIdBoldFilled16.category = 'Security';

export default FaceIdBoldFilled16;

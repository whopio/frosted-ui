import * as React from 'react';
import { IconProps } from './types';

export const Heading16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Heading16"
      {...props}
    >
      <path
        d="M2 2.74c0-.409.331-.74.74-.74h2.63c.408 0 .74.331.74.74 0 .408-.332.74-.74.74h-.575v3.78h6.41V3.48h-.575c-.408 0-.74-.332-.74-.74 0-.409.332-.74.74-.74h2.63c.409 0 .74.331.74.74 0 .408-.331.74-.74.74h-.575v9.04h.575c.409 0 .74.332.74.74 0 .409-.331.74-.74.74h-2.63c-.408 0-.74-.331-.74-.74 0-.408.332-.74.74-.74h.575V8.74h-6.41v3.78h.575c.408 0 .74.332.74.74 0 .409-.332.74-.74.74H2.74c-.409 0-.74-.331-.74-.74 0-.408.331-.74.74-.74h.575V3.48H2.74c-.409 0-.74-.332-.74-.74z"
        fill={color}
      />
    </svg>
  );
};

Heading16.category = 'Text Formatting';

export default Heading16;

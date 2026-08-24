import * as React from 'react';
import { IconProps } from './types';

export const DocumentCheckmark16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentCheckmark16"
      {...props}
    >
      <path
        d="M7.72 10.22c.293-.293.768-.293 1.061 0 .293.293.293.768 0 1.06l-4.5 4.5c-.293.293-.767.293-1.06 0l-2-2c-.293-.293-.293-.767 0-1.06.293-.293.767-.293 1.06 0l1.47 1.47 3.97-3.97zM8.033 0c.194 0 .388.02.578.058 3.196.639 5.693 3.136 6.332 6.332.038.19.058.384.058.578v5.282c0 2.07-1.68 3.75-3.75 3.75h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c1.242 0 2.25-1.008 2.25-2.25V8.482c-.01-.958-.789-1.732-1.75-1.732h-1C9.233 6.75 8.002 5.52 8 4v-.75C8 2.344 7.313 1.6 6.43 1.51L6.25 1.5h-1.5C3.508 1.5 2.5 2.508 2.5 3.75v4.5c0 .414-.336.75-.75.75S1 8.664 1 8.25v-4.5C1 1.68 2.68 0 4.75 0h3.282zm1.1 1.747c.235.45.369.96.369 1.503V4c0 .69.56 1.25 1.25 1.25h1c.497 0 .968.112 1.39.312-.707-1.794-2.173-3.195-4.01-3.815z"
        fill={color}
      />
    </svg>
  );
};

DocumentCheckmark16.category = 'Interface General';

export default DocumentCheckmark16;

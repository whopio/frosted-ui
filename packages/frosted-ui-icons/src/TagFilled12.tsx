import * as React from 'react';
import { IconProps } from './types';

export const TagFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.74609 0C10.9887 0 11.9961 1.00736 11.9961 2.25V5.85742C11.9959 6.65296 11.6798 7.41603 11.1172 7.97852L7.90527 11.1904C6.83139 12.2639 5.09042 12.2639 4.0166 11.1904L0.804688 7.97949C-0.268901 6.90571 -0.268649 5.16474 0.804688 4.09082L4.01758 0.878906C4.58016 0.316423 5.34313 1.43657e-05 6.13867 0H9.74609ZM7.5 3C6.67157 3 6 3.67157 6 4.5C6 5.32843 6.67157 6 7.5 6C8.3282 5.99974 9 5.32826 9 4.5C9 3.67174 8.3282 3.00026 7.5 3Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled12.category = 'Interface General';

export default TagFilled12;

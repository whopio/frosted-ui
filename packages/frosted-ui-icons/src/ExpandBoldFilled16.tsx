import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.43945 8.43945C6.02524 7.85367 6.97476 7.85367 7.56055 8.43945C8.14633 9.02524 8.14633 9.97476 7.56055 10.5605L6.12109 12H6.5C7.32843 12 8 12.6716 8 13.5C8 14.3284 7.32843 15 6.5 15H2.5C2.10218 15 1.72076 14.8419 1.43945 14.5605C1.15815 14.2792 1 13.8978 1 13.5V9.5C1 8.67157 1.67157 8 2.5 8C3.32843 8 4 8.67157 4 9.5V9.87891L5.43945 8.43945ZM13.5 1C14.3284 1 15 1.67157 15 2.5V6.5C15 7.32843 14.3284 8 13.5 8C12.6716 8 12 7.32843 12 6.5V6.12109L10.5605 7.56055C9.97476 8.14633 9.02524 8.14633 8.43945 7.56055C7.85367 6.97476 7.85367 6.02524 8.43945 5.43945L9.87891 4H9.5C8.67157 4 8 3.32843 8 2.5C8 1.67157 8.67157 1 9.5 1H13.5Z"
        fill={color}
      />
    </svg>
  );
};

ExpandBoldFilled16.category = 'Arrows';

export default ExpandBoldFilled16;

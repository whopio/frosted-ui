import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM4.75 4.5C4.33579 4.5 4 4.83579 4 5.25C4 5.66421 4.33579 6 4.75 6H5.25V7.5H4.75C4.33579 7.5 4 7.83579 4 8.25C4.00007 8.66416 4.33583 9 4.75 9H7.25C7.66413 8.99995 7.99993 8.66412 8 8.25C8 7.83582 7.66417 7.50005 7.25 7.5H6.75V5.25C6.75 4.86183 6.45512 4.54253 6.07715 4.50391L6 4.5H4.75ZM5.75 2.50391C5.33583 2.50391 5.00007 2.83975 5 3.25391C5 3.66812 5.33579 4.00391 5.75 4.00391C6.16421 4.00391 6.5 3.66812 6.5 3.25391C6.49993 2.83975 6.16417 2.50391 5.75 2.50391Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleFilled12.category = 'Interface General';

export default InfoCircleFilled12;

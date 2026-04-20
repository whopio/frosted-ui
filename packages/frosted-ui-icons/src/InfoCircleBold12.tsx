import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM6 2.50391C6.55224 2.50391 6.99993 2.95168 7 3.50391C7 4.04244 6.57426 4.48041 6.04102 4.50195C6.57426 4.52349 7 4.96147 7 5.5V7L7.10254 7.00488C7.60667 7.05621 8 7.48232 8 8C8 8.55228 7.55228 9 7 9H5C4.44772 9 4 8.55228 4 8C4 7.48232 4.39333 7.05621 4.89746 7.00488L5 7V6.5C4.44772 6.5 4 6.05228 4 5.5C4 4.94772 4.44772 4.5 5 4.5H5.91797C5.40408 4.45825 5 4.02855 5 3.50391C5.00007 2.95168 5.44776 2.50391 6 2.50391Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold12.category = 'Interface General';

export default InfoCircleBold12;

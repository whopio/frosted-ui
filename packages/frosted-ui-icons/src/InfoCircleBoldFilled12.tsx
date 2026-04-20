import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0.25C9.17564 0.25 11.75 2.82436 11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25ZM6 2.50391C5.44776 2.50391 5.00007 2.95168 5 3.50391C5 4.02855 5.40408 4.45825 5.91797 4.5H5C4.44772 4.5 4 4.94772 4 5.5C4 6.05228 4.44772 6.5 5 6.5V7L4.89746 7.00488C4.39333 7.05621 4 7.48232 4 8C4 8.55228 4.44772 9 5 9H7C7.55228 9 8 8.55228 8 8C8 7.48232 7.60667 7.05621 7.10254 7.00488L7 7V5.5C7 4.96147 6.57426 4.52349 6.04102 4.50195C6.57426 4.48041 7 4.04244 7 3.50391C6.99993 2.95168 6.55224 2.50391 6 2.50391Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

InfoCircleBoldFilled12.category = 'Interface General';

export default InfoCircleBoldFilled12;

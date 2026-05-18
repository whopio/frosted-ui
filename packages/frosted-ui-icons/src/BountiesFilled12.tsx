import * as React from 'react';
import { IconProps } from './types';

export const BountiesFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.51899 0.0379747C10.0984 0.0379747 13 2.93962 13 6.51899C12.9999 10.0982 10.0983 13 6.51899 13C2.93971 13 0.0381172 10.0982 0.0379747 6.51899C0.0379747 2.93962 2.93962 0.0379747 6.51899 0.0379747ZM6.48101 3.37553C4.7659 3.37553 3.37553 4.7659 3.37553 6.48101C3.37553 8.19612 4.7659 9.5865 6.48101 9.5865C8.19612 9.5865 9.5865 8.19612 9.5865 6.48101C9.5865 4.7659 8.19612 3.37553 6.48101 3.37553ZM6.48101 4.72574C7.45042 4.72574 8.23629 5.5116 8.23629 6.48101C8.23629 7.45042 7.45042 8.23629 6.48101 8.23629C5.5116 8.23629 4.72574 7.45042 4.72574 6.48101C4.72574 5.5116 5.5116 4.72574 6.48101 4.72574Z"
        fill={color}
      />
    </svg>
  );
};

BountiesFilled12.category = 'Interface General';

export default BountiesFilled12;

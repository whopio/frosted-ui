import * as React from 'react';
import { IconProps } from './types';

export const BulbBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.75 21.502C16.164 21.5022 16.4999 21.8379 16.5 22.252C16.5 22.666 16.164 23.0017 15.75 23.002H8.25C7.83579 23.002 7.5 22.6662 7.5 22.252C7.50006 21.8378 7.83582 21.502 8.25 21.502H15.75ZM12 1C16.6944 1 20.4999 4.80566 20.5 9.5C20.5 11.8736 19.5251 14.0199 17.957 15.5605C17.3641 16.1431 17 16.8226 17 17.5C16.9999 18.8807 15.8807 20 14.5 20H9.5C8.11933 20 7.00007 18.8807 7 17.5C7 16.8226 6.63593 16.1431 6.04297 15.5605C4.47488 14.0199 3.50003 11.8736 3.5 9.5C3.50007 4.80566 7.30561 1 12 1Z"
        fill={color}
      />
    </svg>
  );
};

BulbBlankFilled24.category = 'Objects';

export default BulbBlankFilled24;

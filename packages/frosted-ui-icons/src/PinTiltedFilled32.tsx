import * as React from 'react';
import { IconProps } from './types';

export const PinTiltedFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.9365 3.69952C18.4009 2.23534 20.7748 2.23548 22.2393 3.69952L28.25 9.71027C29.7144 11.1747 29.7143 13.5485 28.25 15.013L22.915 20.3489C22.6638 20.6003 22.4701 20.9039 22.3477 21.2376L20.3184 26.7718C19.3754 29.3434 16.0825 30.0697 14.1455 28.1331L9.51172 23.4984L4.91602 28.095C4.62314 28.3879 4.14739 28.3879 3.85449 28.095C3.56191 27.8022 3.562 27.3273 3.85449 27.0345L8.45117 22.4378L3.81738 17.804C1.8809 15.8671 2.60626 12.5742 5.17773 11.6312L10.7119 9.60284C11.0459 9.4804 11.35 9.28596 11.6016 9.03448L16.9365 3.69952Z"
        fill={color}
      />
    </svg>
  );
};

PinTiltedFilled32.category = 'Interface General';

export default PinTiltedFilled32;

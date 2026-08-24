import * as React from 'react';
import { IconProps } from './types';

export const HeadphonesBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeadphonesBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c2.124 0 3.69.858 4.688 2.188C11.646 3.465 12 5.067 12 6.5V9c0 .02-.003.04-.004.06 0 .021.004.043.004.065C12 10.713 10.713 12 9.125 12H8.75c-.69 0-1.25-.56-1.25-1.25V7.5c0-.69.56-1.25 1.25-1.25h.375c.124 0 .247.01.367.025-.035-.985-.3-1.916-.805-2.588C8.185 3.018 7.377 2.5 6 2.5s-2.185.517-2.688 1.188c-.503.671-.77 1.602-.805 2.587.12-.015.243-.025.368-.025h.375c.69 0 1.25.56 1.25 1.25v3.25c0 .69-.56 1.25-1.25 1.25h-.375C1.287 12 0 10.713 0 9.125c0-.022.002-.044.003-.065L0 9V6.5c0-1.432.354-3.035 1.313-4.313C2.31.857 3.876 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

HeadphonesBoldFilled12.category = 'Sound & Music';

export default HeadphonesBoldFilled12;

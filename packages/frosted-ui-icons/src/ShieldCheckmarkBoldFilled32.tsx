import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkBoldFilled32"
      {...props}
    >
      <path
        d="M14.665 0.249756C15.5239 -0.0832331 16.4761 -0.0832559 17.335 0.249756L27.6426 4.24683C29.0636 4.79797 30 6.16604 30 7.69019V17.5691C30 21.7737 26.9254 25.1844 23.918 27.5417C20.8613 29.9376 17.5875 31.4704 16.6562 31.8845C16.2336 32.0725 15.7664 32.0724 15.3438 31.8845C14.4127 31.4705 11.1387 29.9377 8.08203 27.5417C5.07459 25.1844 2.00002 21.7737 2 17.5691V7.69019C2 6.166 2.93636 4.79795 4.35742 4.24683L14.665 0.249756ZM21.2266 12.0623C20.836 11.6717 20.203 11.6717 19.8125 12.0623L14.2285 17.6443L12.4199 15.8367C12.0294 15.4461 11.3964 15.4461 11.0059 15.8367C10.6155 16.2272 10.6154 16.8603 11.0059 17.2507L13.5215 19.7673C13.912 20.1576 14.546 20.1577 14.9365 19.7673L21.2266 13.4763C21.617 13.0859 21.6169 12.4528 21.2266 12.0623Z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled32.category = 'Security';

export default ShieldCheckmarkBoldFilled32;

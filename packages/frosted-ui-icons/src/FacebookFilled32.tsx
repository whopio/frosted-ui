import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.3761 30.6662V20.6552H9.28023V16.0544H12.3761V14.0722C12.3761 8.94789 14.686 6.57515 19.696 6.57515C20.6444 6.57515 22.2818 6.76166 22.9544 6.94817V11.1157C22.6001 11.0798 21.9818 11.0614 21.2201 11.0614C18.7601 11.0614 17.8118 11.9947 17.8118 14.4276V16.0544H22.7144L21.8745 20.6545H17.8186V31C25.2456 30.097 31 23.7502 31 16.0544C31 7.7402 24.2842 1 16 1C7.71583 1 1 7.7402 1 16.0544C1 23.1148 5.84219 29.0393 12.3761 30.6662Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookFilled32;

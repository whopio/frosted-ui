import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 0.750977C20.5415 0.751174 26.25 6.45947 26.25 13.501C26.2499 16.4798 25.2246 19.2173 23.5127 21.3877L30.8125 28.6875C31.3981 29.2732 31.3981 30.2228 30.8125 30.8086C30.2268 31.3943 29.2772 31.3942 28.6914 30.8086L21.3916 23.5088C19.2204 25.2233 16.4813 26.2509 13.5 26.251C6.45849 26.251 0.750198 20.5424 0.75 13.501C0.75 6.45935 6.45837 0.750977 13.5 0.750977ZM13.5 3.75098C8.11522 3.75098 3.75 8.1162 3.75 13.501C3.7502 18.8856 8.11535 23.251 13.5 23.251C18.8845 23.2508 23.2498 18.8855 23.25 13.501C23.25 8.11632 18.8846 3.75117 13.5 3.75098Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled32.category = 'Interface General';

export default MagnifyingGlassBoldFilled32;

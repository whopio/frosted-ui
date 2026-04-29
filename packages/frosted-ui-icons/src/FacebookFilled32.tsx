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
        d="M12.2553 31.1551V20.8104H9.05623V16.0562H12.2553V14.0079C12.2553 8.71282 14.6422 6.26099 19.8192 6.26099C20.7993 6.26099 22.4912 6.45371 23.1863 6.64644V10.9529C22.8202 10.9158 22.1812 10.8967 21.3942 10.8967C18.8522 10.8967 17.8722 11.8612 17.8722 14.3752V16.0562H22.9383L22.0703 20.8096H17.8792V31.5C25.5537 30.5669 31.5 24.0086 31.5 16.0562C31.5 7.46487 24.5603 0.5 16 0.5C7.43969 0.5 0.5 7.46487 0.5 16.0562C0.5 23.352 5.5036 29.474 12.2553 31.1551Z"
        fill={color}
      />
    </svg>
  );
};

FacebookFilled32.category = 'Social & Brands';

export default FacebookFilled32;

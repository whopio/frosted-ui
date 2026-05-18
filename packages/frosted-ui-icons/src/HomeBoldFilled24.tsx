import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.26465 2.44654C10.3821 0.519935 13.6179 0.519936 15.7354 2.44654L21.3965 7.59791C22.4178 8.52734 22.9999 9.8449 23 11.2258V19.0715C22.9998 21.241 21.2408 22.9993 19.0713 22.9993H17C15.8954 22.9993 15 22.1038 15 20.9993V15.9993C14.9997 14.3427 13.6566 12.9993 12 12.9993C10.3434 12.9993 9.00035 14.3427 9 15.9993V20.9993C9 22.1038 8.10457 22.9993 7 22.9993H4.92871C2.75917 22.9993 1.00024 21.241 1 19.0715V11.2258C1.00008 9.8449 1.58216 8.52734 2.60352 7.59791L8.26465 2.44654Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeBoldFilled24.category = 'Buildings';

export default HomeBoldFilled24;

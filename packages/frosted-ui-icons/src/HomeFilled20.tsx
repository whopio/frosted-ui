import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.75 9.30412C1.75 8.41143 2.12962 7.56086 2.79409 6.96473L7.52918 2.71668C8.93498 1.45547 11.065 1.45547 12.4708 2.71668L17.2059 6.96473C17.8704 7.56086 18.25 8.41143 18.25 9.30412V15.8929C18.25 17.1947 17.1947 18.25 15.8929 18.25H13.35C13.0186 18.25 12.75 17.9814 12.75 17.65V13C12.75 11.4812 11.5188 10.25 10 10.25C8.48122 10.25 7.25 11.4812 7.25 13V17.65C7.25 17.9814 6.98137 18.25 6.65 18.25H4.10714C2.80533 18.25 1.75 17.1947 1.75 15.8929V9.30412Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

HomeFilled20.category = 'Buildings';

export default HomeFilled20;

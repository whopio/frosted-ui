import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.19922 2.25061C8.41662 0.0479708 11.5832 0.0481465 12.8008 2.25061L19.5713 14.5016C20.7499 16.6344 19.2073 19.2496 16.7705 19.2496H3.22949C0.792895 19.2494 -0.749877 16.6343 0.428711 14.5016L7.19922 2.25061ZM9.99902 13.5006C9.44689 13.5008 8.99902 13.9484 8.99902 14.5006C8.99935 15.0525 9.44708 15.5004 9.99902 15.5006C10.5511 15.5006 10.9987 15.0526 10.999 14.5006C10.999 13.9483 10.5513 13.5006 9.99902 13.5006ZM9.99902 6.25061C9.44689 6.25078 8.99902 6.69843 8.99902 7.25061V11.2506C8.99935 11.8025 9.44708 12.2504 9.99902 12.2506C10.5511 12.2506 10.9987 11.8026 10.999 11.2506V7.25061C10.999 6.69833 10.5513 6.25061 9.99902 6.25061Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled20.category = 'Interface General';

export default ExclamationTriangleBoldFilled20;

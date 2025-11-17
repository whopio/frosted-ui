import * as React from 'react';
import { IconProps } from './types';

export const MessageFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6 0C9.31239 0 12 2.682 12 5.99316C11.9999 9.30425 9.31233 11.9863 6 11.9863C5.18895 11.9863 4.41424 11.8223 3.70605 11.5293L2.35645 11.9248C0.955105 12.335 -0.345111 11.0212 0.0908203 9.62207L0.486328 8.35352C0.174559 7.62777 2.28548e-05 6.82986 0 5.99316C0 2.682 2.68761 1.28689e-07 6 0Z"
        fill={color}
      />
    </svg>
  );
};

export default MessageFilled12;

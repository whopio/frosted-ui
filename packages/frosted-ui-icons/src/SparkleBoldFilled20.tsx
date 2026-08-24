import * as React from 'react';
import { IconProps } from './types';

export const SparkleBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="SparkleBoldFilled20"
      {...props}
    >
      <path
        d="M4.258 11.258c.385-.649 1.348-.649 1.734 0l.073.15.472 1.18c.16.399.476.715.875.875l1.18.471c.848.34.848 1.541 0 1.881l-1.18.472c-.399.16-.715.476-.875.875l-.472 1.18c-.34.848-1.541.848-1.88 0l-.472-1.18c-.16-.399-.476-.715-.875-.875l-1.18-.472c-.849-.34-.849-1.541 0-1.88l1.18-.472c.398-.16.715-.476.875-.875l.471-1.18.074-.15zm6.525-9.41c.377-1.164 2.057-1.164 2.434 0l.033.121.675 2.927c.136.586.593 1.043 1.178 1.178l2.927.676c1.325.306 1.325 2.193 0 2.5l-2.927.676c-.585.135-1.042.592-1.178 1.177l-.675 2.927c-.306 1.326-2.194 1.326-2.5 0l-.676-2.927c-.135-.585-.592-1.042-1.178-1.177L5.97 9.25c-1.325-.306-1.325-2.194 0-2.5l2.927-.676c.586-.135 1.043-.592 1.178-1.178l.676-2.927.033-.12z"
        fill={color}
      />
    </svg>
  );
};

SparkleBoldFilled20.category = 'Interface General';

export default SparkleBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const CubeBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CubeBold12"
      {...props}
    >
      <path
        d="M4.999.577c.619-.357 1.381-.357 2 0l3.196 1.846c.619.357 1 1.017 1 1.731v3.691l-.005.133c-.044.663-.415 1.264-.995 1.599L7 11.422l-.117.063c-.557.274-1.21.274-1.766 0L5 11.422 1.803 9.577c-.58-.335-.951-.936-.995-1.599l-.005-.133V4.154c0-.67.335-1.292.886-1.661l.114-.07L4.999.577zM2.803 7.845l2.203 1.272C5 9.079 4.999 9.039 4.999 9V6.58L2.878 5.368c-.026-.015-.051-.031-.075-.048v2.525zM9.12 5.368L7 6.58V9c0 .04-.003.079-.008.117l2.204-1.272V5.32c-.024.017-.049.033-.075.048zm-5.337-1.78c.03.013.059.027.087.044L6 4.847l2.129-1.215c.028-.017.057-.031.086-.044L5.999 2.309 3.783 3.588z"
        fill={color}
      />
    </svg>
  );
};

CubeBold12.category = 'Objects';

export default CubeBold12;

import * as React from 'react';
import { IconProps } from './types';

export const TriangleFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.6865 3.97803C14.1619 1.43053 17.8403 1.43027 19.3154 3.97803L30.4736 23.2505C31.9517 25.8036 30.1091 28.999 27.1592 28.9995H4.84277C1.8926 28.9993 0.0501916 25.8037 1.52832 23.2505L12.6865 3.97803Z"
        fill={color}
      />
    </svg>
  );
};

TriangleFilled32.category = 'Interface General';

export default TriangleFilled32;

import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.94 1.93905C20.5257 1.35367 21.4754 1.35363 22.0611 1.93905C22.6465 2.52475 22.6465 3.4744 22.0611 4.06014L14.1206 11.9996L22.0611 19.94C22.6464 20.5258 22.6466 21.4755 22.0611 22.0611C21.4754 22.6465 20.5257 22.6464 19.94 22.0611L11.9995 14.1217L4.06105 22.0601C3.47527 22.6459 2.52477 22.6459 1.93898 22.0601C1.35378 21.4744 1.35356 20.5247 1.93898 19.939L9.87844 11.9996L1.93898 4.06112C1.35348 3.47555 1.35389 2.52584 1.93898 1.94003C2.52477 1.35424 3.47527 1.35424 4.06105 1.94003L11.9995 9.8785L19.94 1.93905Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBoldFilled24.category = 'Interface General';

export default XMarkBoldFilled24;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.866 14.1373C21.3542 14.6254 22.1455 14.6254 22.6336 14.1373C23.1216 13.6491 23.1216 12.8578 22.6336 12.3697L13.3055 3.04158C12.5833 2.31953 11.4123 2.31943 10.6903 3.04158L1.36605 12.3697C0.878062 12.8579 0.878018 13.6492 1.36605 14.1373C1.85421 14.6253 2.64554 14.6253 3.13362 14.1373L11.9979 5.27009L20.866 14.1373ZM20.866 21.1373C21.3542 21.6254 22.1455 21.6254 22.6336 21.1373C23.1215 20.6491 23.1216 19.8578 22.6336 19.3697L13.3055 10.0416C12.5834 9.31948 11.4124 9.3195 10.6903 10.0416L1.36605 19.3697C0.878034 19.8579 0.877936 20.6492 1.36605 21.1373C1.85421 21.6253 2.64554 21.6253 3.13362 21.1373L11.9979 12.2701L20.866 21.1373Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpFilled24.category = 'Arrows';

export default DoubleChevronUpFilled24;

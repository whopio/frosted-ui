import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 1.4502C12.718 1.4502 13.2998 2.03203 13.2998 2.75V10.7002H21.25C21.968 10.7002 22.5498 11.282 22.5498 12C22.5498 12.718 21.968 13.2998 21.25 13.2998H13.2998V21.25C13.2998 21.968 12.718 22.5498 12 22.5498C11.282 22.5498 10.7002 21.968 10.7002 21.25V13.2998H2.75C2.03203 13.2998 1.4502 12.718 1.4502 12C1.4502 11.282 2.03203 10.7002 2.75 10.7002H10.7002V2.75C10.7002 2.03203 11.282 1.4502 12 1.4502Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled24.category = 'Interface General';

export default PlusFilled24;

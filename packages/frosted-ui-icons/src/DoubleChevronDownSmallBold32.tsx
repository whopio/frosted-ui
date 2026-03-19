import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDownSmallBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.8778 15.0407C22.269 14.6516 22.9022 14.6528 23.2918 15.0436C23.6815 15.4349 23.6801 16.0689 23.2889 16.4587L17.1756 22.5466C16.5253 23.1939 15.4743 23.194 14.824 22.5466L8.71076 16.4587C8.31966 16.0689 8.3182 15.4349 8.70783 15.0436C9.09751 14.6525 9.73159 14.6512 10.1229 15.0407L15.9998 20.8942L21.8778 15.0407ZM21.8778 9.29072C22.269 8.90161 22.9022 8.90273 23.2918 9.29365C23.6815 9.68491 23.6801 10.3189 23.2889 10.7087L17.1756 16.7966C16.5253 17.4439 15.4743 17.444 14.824 16.7966L8.71076 10.7087C8.31963 10.3189 8.31819 9.68491 8.70783 9.29365C9.09752 8.90253 9.73159 8.90122 10.1229 9.29072L15.9998 15.1442L21.8778 9.29072Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDownSmallBold32.category = 'Arrows';

export default DoubleChevronDownSmallBold32;

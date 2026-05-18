import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.1167 2.11582C20.6048 1.62807 21.3962 1.62805 21.8843 2.11582C22.3722 2.60389 22.3721 3.39529 21.8843 3.8834L13.7671 11.9996L21.8843 20.1168C22.372 20.605 22.3722 21.3963 21.8843 21.8844C21.3963 22.3721 20.6048 22.372 20.1167 21.8844L11.9995 13.7682L3.8843 21.8834C3.39615 22.3716 2.6039 22.3715 2.11574 21.8834C1.62823 21.3953 1.62797 20.6038 2.11574 20.1158L10.232 11.9996L2.11574 3.88438C1.62789 3.39643 1.62828 2.60498 2.11574 2.1168C2.6039 1.62865 3.39615 1.62865 3.8843 2.1168L11.9995 10.232L20.1167 2.11582Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkFilled24.category = 'Interface General';

export default XMarkFilled24;

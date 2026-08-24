import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkBoldFilled20"
      {...props}
    >
      <path
        d="M9.146.152c.55-.203 1.157-.203 1.708 0l6.529 2.405C18.354 2.915 19 3.84 19 4.875v6.071c0 2.77-2.065 4.928-3.945 6.347-1.934 1.459-3.988 2.372-4.534 2.603h-.002c-.335.142-.703.142-1.039 0-.547-.23-2.6-1.144-4.535-2.603C3.065 15.875 1 13.715 1 10.946V4.875c0-1.035.646-1.96 1.617-2.318L9.146.152zm4.558 6.893c-.39-.39-1.024-.39-1.414 0L8.825 10.51l-.962-.962c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l1.67 1.669c.39.39 1.023.39 1.413 0l4.172-4.172c.39-.39.39-1.024 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled20.category = 'Security';

export default ShieldCheckmarkBoldFilled20;

import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M13.2918 8.55795C13.6823 8.94845 14.3154 8.94839 14.7059 8.55795C15.0963 8.16742 15.0964 7.53437 14.7059 7.14389L8.96274 1.40073C8.43062 0.868936 7.56804 0.868817 7.03598 1.40073L1.29282 7.14389C0.902385 7.53433 0.902555 8.16741 1.29282 8.55795C1.68335 8.94848 2.31636 8.94848 2.70688 8.55795L7.99888 3.26596L13.2918 8.55795ZM13.2918 14.7064C13.6823 15.0969 14.3154 15.0968 14.7059 14.7064C15.0964 14.3159 15.0964 13.6829 14.7059 13.2923L8.96274 7.54917C8.43058 7.01718 7.56807 7.01707 7.03598 7.54917L1.29282 13.2923C0.902369 13.6828 0.902417 14.3159 1.29282 14.7064C1.68334 15.0969 2.31636 15.0969 2.70688 14.7064L7.99888 9.4144L13.2918 14.7064Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronUpBold16.category = 'Arrows';

export default DoubleChevronUpBold16;

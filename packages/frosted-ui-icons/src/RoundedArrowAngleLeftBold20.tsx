import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5 19.0002C16.0898 19.0002 18.9999 16.09 19 12.5002C19 8.91039 16.0899 6.00024 12.5 6.00024H5.26758L8.13379 3.13403C8.62187 2.64593 8.62179 1.85461 8.13379 1.36646C7.64564 0.878307 6.85437 0.878323 6.36621 1.36646L1.36621 6.36646C1.13187 6.60086 1.00001 6.91879 1 7.25024C1.00007 7.58168 1.13185 7.89967 1.36621 8.13403L6.36621 13.134C6.85434 13.622 7.64567 13.622 8.13379 13.134C8.62187 12.6459 8.62181 11.8546 8.13379 11.3665L5.26758 8.50024H12.5C14.7091 8.50024 16.5 10.2911 16.5 12.5002C16.4999 14.7093 14.7091 16.5002 12.5 16.5002H10.75C10.0596 16.5002 9.5 17.0599 9.5 17.7502C9.50013 18.4405 10.0597 19.0002 10.75 19.0002H12.5Z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold20.category = 'Arrows';

export default RoundedArrowAngleLeftBold20;

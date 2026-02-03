import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.6416 4.24582C12.1273 4.97964 12.1273 7.09889 10.6416 7.83274L3.35936 11.4284C1.56553 12.3142 -0.359694 10.4847 0.433578 8.64817L1.23631 6.78879L5.12401 6.78879C5.53822 6.78879 5.87401 6.453 5.87401 6.03879C5.87387 5.62469 5.53814 5.28879 5.12401 5.28879L1.23631 5.28879L0.433578 3.43039C-0.359699 1.59385 1.56554 -0.235667 3.35936 0.650119L10.6416 4.24582Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneFilled12.category = 'Communication';

export default PaperAirplaneFilled12;

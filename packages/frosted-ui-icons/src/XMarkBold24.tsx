import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.293 2.29254C20.6834 1.90242 21.3166 1.90239 21.707 2.29254C22.0973 2.68298 22.0972 3.31611 21.707 3.7066L13.4131 11.9996L21.707 20.2935C22.0971 20.684 22.0973 21.3172 21.707 21.7076C21.3166 22.0977 20.6834 22.0976 20.293 21.7076L11.999 13.4146L3.70703 21.7066C3.31651 22.0971 2.68252 22.0971 2.29199 21.7066C1.90212 21.3161 1.90184 20.6829 2.29199 20.2925L10.585 11.9996L2.29199 3.70758C1.90179 3.31727 1.90217 2.68406 2.29199 2.29352C2.68252 1.903 3.31651 1.90299 3.70703 2.29352L11.999 10.5855L20.293 2.29254Z"
        fill={color}
      />
    </svg>
  );
};

XMarkBold24.category = 'Interface General';

export default XMarkBold24;

import * as React from 'react';
import { IconProps } from './types';

export const CodeBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CodeBold16"
      {...props}
    >
      <path
        d="M8.536 2.237c.145-.533.694-.847 1.227-.702.533.145.847.695.702 1.228l-3 11c-.145.532-.695.847-1.228.702-.533-.146-.847-.695-.701-1.228l3-11zM3.105 4.481c.378-.402 1.012-.421 1.414-.043.402.379.42 1.011.043 1.413l-1.807 1.92c-.12.129-.12.329 0 .457l1.807 1.92c.378.402.359 1.035-.043 1.413-.402.379-1.036.36-1.414-.043L1.298 9.6c-.845-.898-.845-2.3 0-3.199l1.807-1.919zm8.377-.043c.402-.378 1.035-.359 1.413.043l1.806 1.92c.846.898.846 2.3 0 3.198l-1.806 1.92c-.378.402-1.011.42-1.413.042-.402-.378-.421-1.01-.043-1.413l1.806-1.92c.121-.128.121-.328 0-.457l-1.806-1.92c-.379-.402-.36-1.034.043-1.413z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CodeBold16.category = 'Code';

export default CodeBold16;

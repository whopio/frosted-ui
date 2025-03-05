import * as React from 'react';
import { IconProps } from './types';

export const Globe12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.90467 1.92178C7.91978 1.96436 7.93454 2.00728 7.94895 2.05052C8.09208 2.47991 8.21061 2.96854 8.30059 3.49982L9.7421 3.49982C9.28709 2.82013 8.65181 2.27132 7.90467 1.92178ZM6.52592 2.52486C6.6212 2.81068 6.70576 3.1383 6.77612 3.49982H5.22388C5.29424 3.1383 5.3788 2.81068 5.47408 2.52486C5.61786 2.0935 5.77254 1.79853 5.90788 1.6268C5.94648 1.57782 5.97731 1.54609 6 1.52587C6.02269 1.54609 6.05352 1.57782 6.09212 1.6268C6.22746 1.79853 6.38214 2.0935 6.52592 2.52486ZM7 6C7 5.65556 6.98841 5.3211 6.96666 4.99982L5.03334 4.99982C5.01159 5.3211 5 5.65556 5 6C5 6.34445 5.01159 6.67892 5.03335 7.00021L6.96665 7.00021C6.98841 6.67892 7 6.34445 7 6ZM6.77612 8.50021L5.22388 8.50021C5.29424 8.86172 5.3788 9.18932 5.47408 9.47514C5.61786 9.9065 5.77254 10.2015 5.90788 10.3732C5.94648 10.4222 5.97731 10.4539 6 10.4741C6.02269 10.4539 6.05352 10.4222 6.09212 10.3732C6.22746 10.2015 6.38214 9.9065 6.52592 9.47514C6.6212 9.18932 6.70576 8.86172 6.77612 8.50021ZM3.53025 7.00021C3.5103 6.67431 3.5 6.33999 3.5 6C3.5 5.66002 3.5103 5.32571 3.53025 4.99982H1.61155C1.53855 5.32148 1.5 5.65624 1.5 6C1.5 6.34377 1.53855 6.67854 1.61156 7.00021H3.53025ZM2.25792 8.50021H3.69941C3.7894 9.03148 3.90792 9.5201 4.05105 9.94948C4.06546 9.99272 4.08022 10.0356 4.09533 10.0782C3.3482 9.72868 2.71293 9.17988 2.25792 8.50021ZM8.30059 8.50021H9.74208C9.28707 9.17988 8.6518 9.72868 7.90467 10.0782C7.91978 10.0356 7.93454 9.99272 7.94895 9.94948C8.09208 9.5201 8.2106 9.03148 8.30059 8.50021ZM10.3884 7.00021H8.46975C8.4897 6.67431 8.5 6.33999 8.5 6C8.5 5.66002 8.4897 5.32571 8.46975 4.99982H10.3885C10.4615 5.32148 10.5 5.65624 10.5 6C10.5 6.34377 10.4615 6.67854 10.3884 7.00021ZM4.05105 2.05052C3.90792 2.47991 3.78939 2.96854 3.69941 3.49982L2.2579 3.49982C2.71291 2.82013 3.34819 2.27132 4.09533 1.92178C4.08022 1.96436 4.06546 2.00728 4.05105 2.05052ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Globe12;

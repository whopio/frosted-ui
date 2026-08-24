import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBoldFilled12"
      {...props}
    >
      <path
        d="M4.5 12C2.015 12 0 9.984 0 7.5 0 5.014 2.015 3 4.5 3h2.379l-.44-.44c-.586-.585-.586-1.535 0-2.12.586-.586 1.536-.586 2.121 0l3.004 3.003c.069.07.131.146.185.228.011.016.02.034.03.05l.043.07c.012.023.021.046.032.07.01.022.023.044.032.067.014.033.024.066.035.1.005.012.01.024.013.036l.017.062c.03.12.048.245.048.374 0 .13-.017.255-.048.375l-.014.051-.006.02-.023.065-.022.061c-.013.032-.03.064-.045.095-.006.014-.012.028-.02.042-.012.024-.027.047-.041.07l-.03.05c-.056.084-.12.16-.19.231l-3 3c-.585.586-1.535.586-2.12 0-.587-.586-.587-1.535 0-2.12L6.878 6h-2.38C3.672 6 3 6.67 3 7.5 3 8.328 3.672 9 4.5 9h.75c.829 0 1.5.671 1.5 1.5 0 .828-.671 1.5-1.5 1.5H4.5z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled12.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled12;

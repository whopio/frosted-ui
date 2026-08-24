import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeftBoldFilled12"
      {...props}
    >
      <path
        d="M7.5 12C9.985 12 12 9.984 12 7.5 12 5.014 9.984 3 7.5 3H5.12l.44-.44c.586-.585.586-1.535 0-2.12-.585-.586-1.535-.586-2.12 0L.435 3.442c-.07.07-.132.146-.186.228-.011.016-.02.034-.03.05-.014.024-.03.047-.042.07-.012.023-.022.046-.032.07-.011.022-.023.044-.033.067-.013.033-.024.066-.035.1l-.013.036-.016.062C.019 4.246 0 4.37 0 4.5c0 .13.018.255.049.375l.013.051.006.02c.007.022.016.044.024.065.007.02.013.041.021.061.014.032.03.064.045.095.007.014.012.028.02.042.013.024.028.047.042.07.01.017.019.034.03.05.055.084.12.16.19.231l3 3c.585.586 1.535.586 2.12 0 .586-.586.586-1.535 0-2.12L5.12 6H7.5C8.328 6 9 6.67 9 7.5 9 8.328 8.328 9 7.5 9h-.75c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5h.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBoldFilled12.category = 'Arrows';

export default RoundedArrowAngleLeftBoldFilled12;

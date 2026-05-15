import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.0005 22.9998C19.4186 22.9995 23.0005 19.4179 23.0005 14.9998C23.0004 10.5817 19.4185 7 15.0005 6.99976H6.12158L9.56104 3.5603C10.1464 2.97449 10.1466 2.02485 9.56104 1.43921C8.9754 0.853575 8.02576 0.853874 7.43994 1.43921L1.43994 7.43921C1.15877 7.72041 0.999622 8.10211 0.999512 8.49976C0.999534 8.89755 1.15866 9.27902 1.43994 9.5603L7.43994 15.5603C8.02572 16.146 8.97527 16.146 9.56104 15.5603C10.1463 14.9745 10.1466 14.0249 9.56104 13.4392L6.12158 9.99976H15.0005C17.7616 10 20.0004 12.2386 20.0005 14.9998C20.0005 17.761 17.7617 19.9995 15.0005 19.9998H12.9106C12.0824 19.9999 11.4108 20.6715 11.4106 21.4998C11.4106 22.3281 12.0823 22.9997 12.9106 22.9998H15.0005Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBoldFilled24.category = 'Arrows';

export default RoundedArrowAngleLeftBoldFilled24;
